import { Request, Response, Router } from 'express';
import exampleController from '../controllers/example.controller';

class Routes {
  public routes = Router();

  constructor() {
    this.routes.post('/', exampleController.getDefault);
  }

}

export default new Routes().routes;
