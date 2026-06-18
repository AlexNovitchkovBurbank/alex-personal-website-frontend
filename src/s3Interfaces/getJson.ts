import axios from "axios";

const cloudfrontDistroUri = import.meta.env.VITE_BASE_URL;

export const getJson = async (folder: string, pageName: string) => {
  const projectDataUrl = `https://${cloudfrontDistroUri}/${folder}/${pageName}.json`;

  try {
    return await axios.get(projectDataUrl);
  } catch (err: any) {
    console.error("getJson fetch failed", {
      projectDataUrl,
      folder,
      pageName,
      status: err?.response?.status,
      headers: err?.response?.headers,
      data: err?.response?.data,
      message: err?.message,
    });
    throw err;
  }
};

export default getJson;
