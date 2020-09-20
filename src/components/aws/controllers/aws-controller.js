import {
  awsPresignedParametersConfig,
  s3Config,
} from '../configurations/aws-config';

class AWSController {
  static async getPresignedUrl(req, res) {
    const fileurls = [];
    const awsPresignedParameters = awsPresignedParametersConfig;
    const s3 = s3Config;
    s3.getSignedUrl('putObject', awsPresignedParameters, (err, url) => {
      if (err) {
        console.log('wow! something went wrong here');
        res.status(400).json({ msg: 'hmm theres an error' });
      } else {
        fileurls.push(url);
        console.log(`Presigned URL: ${fileurls}`);
        res.status(201).json({
          success: true,
          message: 'AWS SDK S3 Pre-signed urls generated successfully.',
          urls: fileurls,
        });
      }
    });
  }
}

export default AWSController;
