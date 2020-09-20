import express from 'express';
import { urlencoded, json } from 'body-parser';
import awsRouter from './components/aws/routes/routes-aws';
import errorHandler from './middlewares/error-handler';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.server.use(errorHandler);
  }

  middlewares() {
    this.server.use(json());
    this.server.use(urlencoded({ extended: false }));
  }

  routes() {
    this.server.use(awsRouter);
  }
}

export default new App().server;
