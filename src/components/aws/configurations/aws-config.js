import AWS from 'aws-sdk';

require('dotenv').config();

export const s3Config = new AWS.S3({
  accessKeyId: process.env.TOKEN,
  secretAccessKey: process.env.AMAZON_SECRET_KEY,
});

export function awsPresignedParametersConfig(fileName) {
  return {
    Bucket: process.env.BUCKET,
    Key: `${fileName}`,
    Expires: 60 * 60,
    ACL: 'bucket-owner-full-control',
  };
}
