import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import exampleRoute from './routes/example.route';

class App {
  private _app = express();

  constructor() {
    this._setMiddlewares();
    this._setRoutes();
  }

  private _setMiddlewares(): void {
    dotenv.config();

    this._app.set('env', {
      port: process.env.PORT || 3333,
      env: process.env.NODE_ENV,
    });

    this._app.use(express.json());
    this._app.use(cors());
  }

  private _setRoutes(): void {
    this._app.use(exampleRoute); // ou this._app.use('/example', exampleRoute);
  }

  get app(): express.Application {
    return this._app;
  }
}

export default new App().app;
