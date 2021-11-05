const jsonServer = require("json-server");
const server = jsonServer.create();
const routes = jsonServer.router("db.json");
const middleWares = jsonServer.defaults();
