const WebSocket = require("ws");
const faker = require("faker");

// Create a fake object
let wasNull = false;
const createMember = (
  nameset = [
    "Barry Bribben",
    "Caniel Dilson",
    "John Carlowé",
    "Kristy McKristal",
    "Neill McMahon",
    "Patrick Hendon",
    "Jake Serpiente",
    "Hamie Jiggins",
    "Big Bopper",
    "The Doctor",
    "Wee Paul",
    "Big Paul",
    "Schmyan Schmark"
  ]
) => {
  // Having multiple nulls in a row looks unresponsive 😢
  const cost =
    Math.random() > 0.15 || wasNull
      ? faker.random.number({ min: 800, max: 1200, precision: 100 })
      : null;

  // Set wasNull for next call
  // The irony of this being here for a presentation that denounces side effects
  wasNull = !cost;

  return {
    uuid: faker.random.uuid(),
    name:
      Math.random() >= 0.4
        ? `${faker.name.firstName()} ${faker.name.lastName()}`
        : nameset[Math.floor(Math.random() * nameset.length)],
    cost
  };
};

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

// Send a bit of JSON every second or so
setInterval(() => {
  broadcast(wss, JSON.stringify(createMember()));
}, 750);

// Hipster message for console
console.log("WebSocket server started on port 8081 🚀");
