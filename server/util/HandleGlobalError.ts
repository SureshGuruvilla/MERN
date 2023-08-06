import { Express, Request, Response } from "express";
import CustomError,{CustomErrorType} from "./CustomError";
export default (app: Express) => {
  app.use((err: CustomErrorType, req: Request, res: Response, next: any) => {
    const _error = new CustomError(err) as CustomErrorType;
    res.status(_error.statusCode).json({ error: _error });
  });
};
