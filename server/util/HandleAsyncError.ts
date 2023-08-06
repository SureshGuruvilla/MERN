import { Request, Response } from "express";

export default (callback: (req: Request, res: Response, next: any) => any) => {
  return (req: Request, res: Response, next: any) => {
    callback(req, res, next).catch((err: Error) =>
      next({ statusCode: 400, message: err.message })
    );
  };
};
