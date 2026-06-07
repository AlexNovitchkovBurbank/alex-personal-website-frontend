import axios from "axios";
import type { Project } from "../components/ProjectCard";

const cloudfrontDistroUri = import.meta.env.VITE_CLOUDFRONT_DISTRO_URL;

const projectDataUrl = `https://${cloudfrontDistroUri}/projectData.json`;

export const putAllProjectDataIntoS3 = async (projects: Project[]) => {
  const data = {
    body: JSON.stringify(projects)
  }
  axios.put(projectDataUrl, data)
};
