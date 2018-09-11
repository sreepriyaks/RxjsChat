import express from 'express';
import * as config from '../config.json';
import path from 'path';

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.initRoutes();
  }

  private config(): void {
    this.app.set('port', config.default.port);
    this.app.use(express.static(path.join(__dirname, 'public')));
  }

  private initRoutes(): void {
    this.app.get('/', (req: express.Request, res: express.Response) => {
      res.status(200).send('Hi! Welcome to Smart Chat!');
    });
  }
}

export default new App();
