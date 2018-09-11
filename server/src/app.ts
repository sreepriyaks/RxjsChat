import express from 'express';
import * as config from '../config.json';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.set('port', config.default.port);
  }
}

export default new App();
