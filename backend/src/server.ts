import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createServer } from "http";
import { Server } from "socket.io";
dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

//Routes

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Server is running");
});

//fallback
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Invalid route");
});

//create HTTP server amd attach socke ID
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

//socketHandeler(io)

//start server

const PORT = process.env.PORT;

if (!PORT) {
  throw new Error("Missing port!");
}

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
