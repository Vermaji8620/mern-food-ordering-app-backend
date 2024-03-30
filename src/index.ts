import express, { Request, Response } from "express"
import cors from "cors"
import process from "process";
import "dotenv/config"
import mongoose from "mongoose";
import myUserRoute from "./routes/myUserRoute";
const app = express();
app.use(express.json());
app.use(cors());

// for build
app.get("/health", async (req: Request, res: Response) => {
    res.send({ message: "server is built" })
})
app.use("/api/my/user", myUserRoute);

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => { console.log("database connected"); app.listen(4000, () => console.log("server is up and running ")) }).catch((err) => console.log(err))