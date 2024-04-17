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
import { Col, Container, Row } from "react-bootstrap";

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
        <Container fluid style={{ border: "2px solid black", width: "80%" }}>
          <Row className="justify-content-center">
            <Col md={6} xs={12}>
              <p
                className="url-text"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  marginTop: "12px",
                }}
              >
                {redirectToUrl}
              </p>
            </Col>
            <Col md={6} xs={12} className="d-flex align-items-center">
              <a
                className="url-link"
                href={`${redirectToUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: "8px" }}
              >
                {`${frontEndUrl}/${shortUrl}`}
              </a>
              <MdContentCopy
                style={{ cursor: "pointer" }}
                size={20}
                onClick={copyUrl}
              />
              {copied && (
                <span style={{ marginLeft: "8px", fontSize: "80%" }}>
                  Copied!
                </span>
              )}
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Shortner;
