import express from 'express';
import { urlencoded, json } from 'body-parser';
import awsRouter from './components/aws/routes/routes-aws';
import errorHandler from './middlewares/error-handler';

/**
 * Sets usage for middlewares, routes and an error handler is used.
 * @classdesc Represents the main App.
 * @property {Express} server Server that will be using the middlewares, routes and error handler.
 * @property {method} middlewares Middlewares that will be used by the server.
 * @property {method} routes Every component routes should used here
 *
 */
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
