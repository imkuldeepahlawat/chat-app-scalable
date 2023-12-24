import { Server } from "socket.io";
class SocketService {
  private _io: Server;
  constructor() {
    console.log("Init socket service...");
    this._io = new Server({
      cors: {
        allowedHeaders: ["*"],
        origin: "*",
      },
    });
  }
  public initListener() {
    console.log("Init socket Listners...");
    const io = this.io;
    io.on("connect", (socket) => {
      console.log("Socket connected", socket.id);
      socket.on("event:message", async ({ message }: { message: string }) => {
        console.log("New Message", message);
      });
    });
  }
  get io() {
    return this._io;
  }
}

export default SocketService;
