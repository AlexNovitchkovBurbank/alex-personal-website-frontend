import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import {projects} from '../projects.json'

const stage = import.meta.env.VITE_STAGE;
const bucketName = import.meta.env.VITE_PROJECT_DATA_S3_BUCKET_NAME || `alex-personal-website-project-data-${stage}`;

export const putAllProjectDataIntoS3 = async () => {
    const s3 = new S3Client({ region: 'us-west-2' });
    const results = await Promise.all(
        projects.map((project, i) => {
            const key = `project${i}.txt`;
            const command = new PutObjectCommand({
                Bucket: bucketName,
                Key: key,
                Body: `${project.title};${project.description};${project.key};${project.githubUrl}`,
                ContentType: 'application/json',
            });
            return s3.send(command);
        })
    );
    console.log('All uploads complete:', results);
};