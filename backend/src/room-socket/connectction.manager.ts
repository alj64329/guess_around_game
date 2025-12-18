import { Server } from "socket.io";
import { handleSocketEvents } from "./event.handler";

export const socketHandeler = (io: Server) => {
  io.on("connection", (socket) => {
    console.log(`${socket.id} connected to room server`);
    handleSocketEvents(io, socket);
  });
};
