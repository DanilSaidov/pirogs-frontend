const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./public/db.json");
cost middlewares = jsonServer.defaults({
    static:'./build'
}) 