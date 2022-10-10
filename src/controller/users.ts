import { NextFunction, Request, Response } from "express";

export const uploadProfile = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("uploadProfile");
  } catch (error) {
    console.log("Error In uploadProfile: ", error);
  }
};
