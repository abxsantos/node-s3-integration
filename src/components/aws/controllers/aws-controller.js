import {
  awsPresignedParametersConfig,
  s3Config,
} from '../configurations/aws-config';

class AWSController {
  static async getPresignedUrl(req, res) {
    const fileurls = [];
    const awsPresignedParameters = awsPresignedParametersConfig(req.body.fileName);
    const s3 = s3Config;
    s3.getSignedUrl('putObject', awsPresignedParameters, (err, url) => {
      if (err) {
        res.status(400).send('hmm theres an error');
      } else {
        fileurls.push(url);
        res.status(201).send({
          success: true,
          message: 'AWS SDK S3 Pre-signed urls generated successfully.',
          urls: fileurls,
        });
      }
    });
  }
}

export default AWSController;
