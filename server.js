const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: "./config/config.env" });

const todos = require("./routes/todo");

const app = express();

app.use("/api/v1/todos", todos);

const PORT = process.env.PORT || 5231;
app.listen(PORT, console.log("서버 실행됨"));
