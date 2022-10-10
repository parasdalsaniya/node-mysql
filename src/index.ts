import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth";
import usersRouter from "./routes/users";

dotenv.config();
const port = process.env.PORT;

const app: Express = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(authRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
