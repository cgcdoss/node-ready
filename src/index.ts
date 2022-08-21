import cors from 'cors';
import dotenv from 'dotenv';
import express, { Router } from 'express';

class App {
  private _app = express();
  private _routes = Router();

  constructor() {
    dotenv.config();

    this._app.set('env', {
      port: process.env.PORT || 3333,
      env: process.env.NODE_ENV,
    });

    this._app.use(express.json());
    this._app.use(cors());
    this._setRotas();
    this._app.use(this._routes);
  }

  private _setRotas(): void {
    this._routes.get('/', (req, res) => {
      res.send(
        `Hello, World`
      );
    });
  }

  get app(): express.Application {
    return this._app;
  }
}

export default new App().app;
