import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("Sign up");
    const { name, email, password } = req.body;
    console.log({ name, email, password });
    
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hash,
      }
    })
  
    return res.json(user);
  } catch (error) {
    console.log("Error in Signup: ", error);
  }
};

export const login = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log("Login");
  } catch (error) {
    console.log("Error In Login: ", error);
  }
};
