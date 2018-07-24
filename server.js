const http = require("http");
const app = require("./app");

console.log(process.env.port);
const port = process.env.port || 3000;
const server = http.createServer(app);

server.listen(port, function() {
    console.log("server live on port: " + port);
});