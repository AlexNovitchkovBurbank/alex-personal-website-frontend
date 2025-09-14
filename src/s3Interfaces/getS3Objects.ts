import {GetObjectCommand, ListObjectsV2Command, S3Client} from "@aws-sdk/client-s3"

const s3 = new S3Client({ region: 'us-west-2' });

const stage = import.meta.env.VITE_STAGE;
const bucketNamePrefix = import.meta.env.VITE_PROJECT_DATA_S3_BUCKET_NAME_PREFIX;

const bucketName = bucketNamePrefix + stage;

export const getAllProjectDataFromS3 = async () => {
    const numObjectsInS3 = await getNumObjectsInS3(bucketName);

    for (let i = 0; i < numObjectsInS3; i++) {
        const key = `project${i}.txt`;
        const command = new GetObjectCommand({ Bucket: bucketName, Key: key });
        const response = await s3.send(command);
        return { key: key, body: response.Body };
    }
}

const getNumObjectsInS3 = async (bucketName: string): Promise<number> => {
    const command = new ListObjectsV2Command({ Bucket: bucketName });
    const response = await s3.send(command);
    return response.Contents?.length ?? 0;
}

export default getAllProjectDataFromS3;