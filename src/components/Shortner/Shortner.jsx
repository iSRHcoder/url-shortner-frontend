/* eslint-disable react/prop-types */
import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import {
  getPerticularUrl,
  getUrls,
  postUrlApi,
} from "../../services/serverApi";
import toast from "react-hot-toast";
import { MdContentCopy } from "react-icons/md";
import Loader from "../Loader/Loader";

const frontEndUrl = import.meta.env.VITE_FRONTEND_DOMAIN;

const Shortner = () => {
  const [inputUrl, setInputUrl] = useState("");
  const [urls, setUrls] = useState([]);
  const [shortUrl, setShortUrl] = useState("");
  const [redirectToUrl, setRedirectToUrl] = useState("");
  const [showUrl, setShowUrl] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  const copyUrl = () => {
    navigator.clipboard.writeText(`${frontEndUrl}/${shortUrl}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  useEffect(() => {
    setShowUrl(false);
  }, []);

  const shortUrlBtnHandler = async () => {
    try {
      setIsLoader(true);
      if (!inputUrl.length) {
        setIsLoader(false);
        return toast.error("Please provide URL to short");
      }

      const postResponse = await postUrlApi({ inputUrl });
      toast.success(postResponse.message);

      const getResponse = await getUrls();
      setUrls(getResponse.urls);
      setIsLoader(false);
      setShowUrl(true);
      setInputUrl("");
    } catch (error) {
      console.error("Error in shortUrlBtnHandler :", error);
    }
  };

  useEffect(() => {
    if (urls.length > 0) {
      const lastUrl = urls[urls.length - 1].shortId;
      setShortUrl(lastUrl);
      const shortenUrl = getPerticularUrl(lastUrl);
      shortenUrl.then((res) => {
        setRedirectToUrl(res);
      });
    }
  }, [urls]);

  return (
    <>
      <h2>Free URL Shortener</h2>

      <div className="mb-5 mt-4">
        <TextField
          label="input url here..."
          variant="outlined"
          value={inputUrl}
          style={{
            width: "40%",
            fontSize: "20px",
          }}
          onChange={(e) => {
            setInputUrl(e.target.value);
          }}
        />
        <Button
          className="ms-3 "
          variant="contained"
          onClick={shortUrlBtnHandler}
          style={{
            fontSize: "20px",
            margin: "auto",
            padding: "10px",
          }}
        >
          short url
        </Button>
      </div>

      {isLoader && (
        <div className="ms-5">
          <Loader />
        </div>
      )}

      {showUrl && !isLoader && (
        <div
          className="m-auto"
          style={{
            width: "80%",
            border: "1px solid black",
            padding: "20px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <p
            style={{
              width: "500px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: "20px",
              margin: "auto",
            }}
          >
            {redirectToUrl}
          </p>

          <a
            href={`${redirectToUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: "20px",
              margin: "auto",
            }}
          >
            {`${frontEndUrl}/${shortUrl}`}
          </a>
          <MdContentCopy
            style={{ cursor: "pointer" }}
            size={20}
            onClick={copyUrl}
          />
          {copied && <span style={{ marginLeft: "8px" }}>Copied!</span>}
        </div>
      )}
    </>
  );
};

export default Shortner;
