import { Router } from 'express';
const aws = require('aws-sdk');

const awsRouter = Router();
const s3 = new aws.S3({
  accessKeyId: process.env.TOKEN,
  secretAccessKey: process.env.AMAZON_SECRET_KEY,
});

awsRouter.get('/upload-to-s3', function (req, res) {
  let fileurls = [];
  const file = 'new_file.jpg/';
  const myKey = `images/${file}`;
  const expirationURLs = 60 * 60;
  const myBucket = process.env.BUCKET;
  const parameters = {
    Bucket: myBucket,
    Key: myKey,
    Expires: expirationURLs,
    ACL: 'bucket-owner-full-control',
    ContentType: 'image/jpg',
  };
  s3.getSignedUrl('putObject', parameters, function (err, url) {
    if (err) {
      console.log(err)
      console.log('wow! something went wrong here');
      res.json({ msg: 'hmm theres an error' });
    } else {
      fileurls.push(url);
      console.log('Presigned URL: ', fileurls[0]);
      res.json({
        success: true,
        message: 'AWS SDK S3 Pre-signed urls generated successfully.',
        urls: fileurls,
      });
    }
  });
});

export default awsRouter;
