import axios from "axios";
const apiUrl = import.meta.env.VITE_BACKEND_DOMAIN;

export const postUrlApi = async (data) => {
  try {
    const response = await axios.post(`${apiUrl}/api/url`, data);
    const responseData = response.data;
    return responseData;
  } catch (error) {
    console.error("Error in postUrlApi:", error);
  }
};

export const getUrls = async () => {
  try {
    const response = await axios.get(`${apiUrl}/api/url`);
    const responseData = response.data;
    return responseData;
  } catch (error) {
    console.error("Error in getUrls:", error);
  }
};

export const getPerticularUrl = async (urlId) => {
  try {
    const response = await axios.get(`${apiUrl}/api/url/${urlId}`);
    const responseData = response.data.redirectUrl;
    return responseData;
  } catch (error) {
    console.error("Error in getUrls:", error);
  }
};
