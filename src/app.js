import express from 'express';
import { urlencoded, json } from 'body-parser';
import awsRouter from './components/aws/routes/routes-aws';
import errorHandler from './middlewares/error-handler';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(json());
    this.server.use(urlencoded({ extended: false }));
  }

  routes() {
    this.server.use(awsRouter);
    this.server.use(errorHandler);
  }
}

export default new App().server;
