import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import jwt from "jsonwebtoken";

const isAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("req.headers ", req.headers.authorization);

    const authHeader = req.headers.authorization;
    const token: string = authHeader?.split(" ")[1]!;

    if (!token) next(createHttpError(401, { message: "Token is required." }));

    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    //  req.user = decoded;
  } catch (error) {
    return next(createHttpError(401, { message: "Invalid Token" }));
  }
  return next();
};

export default isAuth;
