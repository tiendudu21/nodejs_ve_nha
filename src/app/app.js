const express = require("express");
const app = express();
const config = require('config')

app.use(express.urlencoded({extended: true}));
app.use("/static", express.static(config.get("app.static_folder")));

app.use(require(`${__dirname}/../routers/web`));
module.exports = app;