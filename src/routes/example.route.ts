import { Request, Response, Router } from 'express';
import exampleController from '../controllers/example.controller';

class Routes {
  private _routes = Router();

  constructor() {
    this._setRoutes();
  }

  private _setRoutes(): void {
    this._routes.get('/', (req: Request, res: Response) => {
      res.status(200).json({ msg: exampleController.helloWorld() });
    });
  }

  public get routes() {
    return this._routes;
  }
}

export default new Routes().routes;
