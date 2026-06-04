import axios from "axios";

const cloudfrontDistroUri = import.meta.env.VITE_CLOUDFRONT_DISTRO_URL;

const projectDataUrl = `https://${cloudfrontDistroUri}/projectData`;

export const getAllProjectDataFromS3 = async () => {
  axios.get(projectDataUrl).then((data) => console.log(data));
};

export default getAllProjectDataFromS3;
