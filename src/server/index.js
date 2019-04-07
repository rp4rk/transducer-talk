const WebSocket = require("ws");

// Create a websocket server
const wss = new WebSocket.Server({
  port: 8081
});

// Broadcast function
function broadcast(wss, message) {
  if (!wss || !wss.clients) return;

  wss.clients.forEach(client => {
    if (client.readyState !== WebSocket.OPEN) return;

    client.send(message);
  });
}

// Send a bit of JSON every second
setInterval(() => {
  broadcast(wss, JSON.stringify({ test: "yeetos" }));
}, 2000);

// Hipster message for console
console.log("WebSocket server started on port 8081 🚀");
