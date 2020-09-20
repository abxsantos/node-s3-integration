import { Router } from 'express';
const aws = require('aws-sdk');

const awsRouter = Router();

awsRouter.get('/upload-to-s3', function (req, res) {
  const fileurls = [];

  const s3 = new aws.S3({
    accessKeyId: process.env.TOKEN,
    secretAccessKey: process.env.AMAZON_SECRET_KEY,
  });

  const file = 'new_file.jpg';
  const expirationURLs = 60 * 60;
  const parameters = {
    Bucket: process.env.BUCKET,
    Key: file,
    Expires: expirationURLs,
    ACL: 'bucket-owner-full-control',
  };
  s3.getSignedUrl('putObject', parameters, function (err, url) {
    if (err) {
      console.log(err);
      console.log('wow! something went wrong here');
      res.json({ msg: 'hmm theres an error' });
    } else {
      fileurls[0] = url;
      console.log(`Presigned URL: ${fileurls}`);
      res.json({
        success: true,
        message: 'AWS SDK S3 Pre-signed urls generated successfully.',
        urls: fileurls,
      });
    }
  });
});

export default awsRouter;
