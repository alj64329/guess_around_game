import { Server } from "socket.io";
import { handleSocketEvents } from "./event.handler";

export const socketHandeler = (io: Server) => {
  io.on("connect", (socket) => {
    console.log(`${socket.id} has connected!`);
    handleSocketEvents(io, socket);
  });
};
