
const http = require("node:http");

const products = [
  {
    id: 1,
    name: "After Hours Tee",
    price: 38,
    category: "wear"
  },
  {
    id: 2,
    name: "Toxic Devotion",
    price: 24,
    category: "ritual"
  },
  {
    id: 3,
    name: "Night Mode Pack",
    price: 12,
    category: "digital"
  },
  {
    id: 4,
    name: "Noir Carryall",
    price: 56,
    category: "wear"
  }
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

  const path = new URL(
    req.url,
    "http://localhost"
  ).pathname.replace(/\/+$/, "") || "/";

  if (req.method === "GET" && path === "/") {
    res.writeHead(200);
    res.end(JSON.stringify({
      message: "Welcome to the DRONET backend!",
      status: "online"
    }));
    return;
  }

  if (req.method === "GET" && path === "/products") {
    res.writeHead(200);
    res.end(JSON.stringify(products));
    return;
  }

  res.writeHead(404);
  res.end(JSON.stringify({
    error: "Route not found"
  }));
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`DRONET API running on port ${PORT}`);
});
