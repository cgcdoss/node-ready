import { Request, Response, Router } from 'express';
import exampleController from '../controllers/example.controller';

class Routes {
  public routes = Router();

  constructor() {
    this.routes.get('/example', exampleController.getExample);
    this.routes.post('/example', exampleController.getExample);
  }

}

export default new Routes().routes;
