const express = require("express");

const { getTodos } = require("../controllers/todo");

const router = express.Router();

//  localhost:7272/api/v1/todos
router.route("/").get(getTodos);

module.exports = router;
