import { Router } from 'express';
import staticController from '../controllers/static.controller';

class Routes {
    public routes = Router();

    constructor() {
        this.routes.get('/', staticController.getIndex);
    }

}

export default new Routes().routes;
