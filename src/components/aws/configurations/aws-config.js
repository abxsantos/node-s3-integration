import AWS from 'aws-sdk';

require('dotenv').config();

export const s3Config = new AWS.S3({
  accessKeyId: process.env.TOKEN,
  secretAccessKey: process.env.AMAZON_SECRET_KEY,
});

export const awsPresignedParametersConfig = {
  Bucket: process.env.BUCKET,
  Key: 'new_file.jpg',
  Expires: 60 * 60,
  ACL: 'bucket-owner-full-control',
};
