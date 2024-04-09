import { Request, Response } from "express";

class ExampleController {

  public getExample = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).json({ msg: 'Hello world' });
  }

}

export default new ExampleController();
