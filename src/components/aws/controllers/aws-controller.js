class AWSController {
  constructor() {
    const aws = require('aws-sdk');
    const s3 = new aws.S3({
      accessKeyId: process.env.TOKEN,
      secretAccessKey: process.env.AMAZON_SECRET_KEY,
    });
  }
  static uploadFile(req, res) {
    let fileurls = [];
    const file = 'new_file.jpg/';
    const expirationURLs = 60 * 60;
    const parameters = {
      bucket: process.env.BUCKET,
      key: `imges/${file}`,
      expires: expirationURLs,
      acl: 'bucket-owner-full-control',
      ContentType: 'image/jpg',
    };

    this.s3.getSignedUrl('putObject', parameters, function(err, url){
      if(err){
        console.log('wow! something went wrong here')
        res.json({msg: 'hmm theres an error'})
      } else {
        fileurls.push(url)
      }
    })
  }
}

export default AWSController;
