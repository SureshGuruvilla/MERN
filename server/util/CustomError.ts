export interface CustomErrorType {
  statusCode: number;
  message: string;
}

export default class CustomError {
  constructor(error: CustomErrorType) {
    error.statusCode = error.statusCode || 500;
    error.message = error.message || "Error occured";
    return error;
  }
}
