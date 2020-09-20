import AWS from 'aws-sdk';

class AWSController {
  static async getPresignedUrl(req, res) {
    const fileurls = [];
    const s3 = new AWS.S3({
      accessKeyId: process.env.TOKEN,
      secretAccessKey: process.env.AMAZON_SECRET_KEY,
    });
    const awsParameters = {
      Bucket: process.env.BUCKET,
      Key: 'new_file.jpg',
      Expires: 60 * 60,
      ACL: 'bucket-owner-full-control',
    };

    s3.getSignedUrl('putObject', awsParameters, function (err, url) {
      if (err) {
        console.log('wow! something went wrong here');
        res.json({ msg: 'hmm theres an error' });
      } else {
        fileurls.push(url)
        console.log(`Presigned URL: ${fileurls}`);
        res.json({
          success: true,
          message: 'AWS SDK S3 Pre-signed urls generated successfully.',
          urls: fileurls,
        });
      }
    });
  }
}

export default AWSController;
