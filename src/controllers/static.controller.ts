import { Request, Response } from 'express';
import path from 'path';

class StaticController {
    public async getIndex(req: Request, res: Response): Promise<any> {
        return res.sendFile(path.join(__dirname, '../public/index.html'));
    }
}

export default new StaticController();
