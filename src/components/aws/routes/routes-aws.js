import { Router } from 'express';
import AWSController from '../controllers/aws-controller';

const awsRouter = Router();

awsRouter.get('/upload-to-s3', AWSController.uploadFile(req, res));

export default awsRouter;
