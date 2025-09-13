import {GetObjectCommand, PutObjectCommand, S3Client} from "@aws-sdk/client-s3"
import {projects} from '../projects.json'

const s3 = new S3Client({ region: 'us-west-2' });

export const putAllProjectDataIntoS3 = async () => {

    const results = await Promise.all(
        projects.map((project, i) => {
            const command = new PutObjectCommand({
                Bucket: 'alex-personal-website-project-data-${self:provider.stage}',
                Key: `project${i}.txt`,
                Body: `${project.title};${project.description};${project.key};${project.githubUrl}`,
                ContentType: 'application/json',
            });
            return s3.send(command);
        })
    );
    console.log('All uploads complete:', results);
};

const getAllProjectData = async () => {
    const bucketName = 'alex-personal-website-project-data-';

    const numObjectsInS3 = await getNumObjectsInS3(bucketName);

    for (let i = 0; i < numObjectsInS3; i++) {        
        const command = new GetObjectCommand({ Bucket: bucketName, Key: `project${i}.txt` });
        const response = await s3.send(command);
        return { key, body: response.Body };
    }
}

async function getNumObjectsInS3(bucketName: string): Promise<number> {
    const command = new ListObjectsV2Command({ Bucket: bucketName });
    const response = await s3.send(command);
    return response.Contents?.length ?? 0;
}

export default getAllProjectData;