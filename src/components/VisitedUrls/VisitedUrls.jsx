import { useEffect, useState } from "react";
import { getUrls } from "../../services/serverApi";
import { MdContentCopy } from "react-icons/md";

const tableStyle = {
  borderCollapse: "collapse",
  border: "1px solid black",
};

const indexCellStyle = {
  border: "1px solid black",
  padding: "8px",
  textAlign: "center",
};

const urlCellStyle = {
  border: "1px solid black",
  padding: "8px",
  width: "200px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
};

const iconCellStyle = {
  border: "1px solid black",
  padding: "8px",
  textAlign: "center",
};

function truncateUrl(url) {
  const maxLength = 70;
  return url.length > maxLength ? url.slice(0, maxLength - 3) + "..." : url;
}

const VisitedUrls = () => {
  const [allUrlsState, setAllUrlsState] = useState([]);

  useEffect(() => {
    const fetchAllUrls = async () => {
      try {
        const res = await getUrls();
        setAllUrlsState(res.urls);
      } catch (error) {
        console.error("Error fetching URLs:", error);
      }
    };

    fetchAllUrls();
  }, []);

  const handleCopyUrl = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      console.log("URL copied:", url);
    } catch (error) {
      console.error("Error copying URL:", error);
    }
  };

  const tableRows = allUrlsState.map((ele, index) => (
    <tr key={index}>
      <td style={indexCellStyle}>{index + 1}</td>
      <td style={urlCellStyle} title={ele.redirectUrl}>
        {truncateUrl(ele.redirectUrl)}
      </td>

      <td style={iconCellStyle}>
        <MdContentCopy
          style={{ cursor: "pointer" }}
          size={20}
          onClick={() => handleCopyUrl(ele.redirectUrl)}
        />
      </td>
      <td style={indexCellStyle}>{ele.visitHistory?.length}</td>
    </tr>
  ));

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={indexCellStyle}>Sr. No.</th>
          <th style={urlCellStyle}>Full Urls</th>

          <th style={iconCellStyle}>Copy Url</th>
          <th style={indexCellStyle}>Clicks</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  );
};

export default VisitedUrls;
