import { Request, Response } from "express";

class ExampleController {

  public async getDefault(req: Request, res: Response): Promise<Response> {
    return res.status(200).json({ msg: 'Hello world' });
  }

}

export default new ExampleController();
