import axios from "axios";

const cloudfrontDistroUri = import.meta.env.VITE_BASE_URL;

export const getJson = async (folder: string, pageName: string) => {
  const projectDataUrl = `https://${cloudfrontDistroUri}/${folder}/${pageName}.json`;

  return axios.get(projectDataUrl);
};

export default getJson;
