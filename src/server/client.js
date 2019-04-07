const WebSocket = require("ws");

const ws = new WebSocket("ws://localhost:8081");

ws.on("open", () => {
  console.log("Opened connection!");
});

ws.on("message", data => console.log(JSON.parse(data)));

ws.on("error", err => console.log(err));
