const connection = require("../db/mysql_connection");

// @desc     모든 할일 불러오는 API (25개씩)
// @route   GET /api/v1/todos
// @req     title, offset, limit  ( ?offset=30&limit=25 )
// @res     success, items[ {id,title,date,completed}, cnt ]
exports.getTodos = async (req, res, next) => {
  console.log("할일 전부 가져오는 API ");

  let offset = req.query.offset;
  let limit = req.query.limit;

  if (!offset || !limit) {
    res.status(400).json({ message: "parameters setting error" });
    return;
  }

  let query = `select * from todo group by id order by id limit ${offset}, ${limit}`;

  try {
    [rows] = await connection.query(query);
    let cnt = rows.length;
    res.status(200).json({ success: true, items: rows, cnt: cnt });
    return;
  } catch (e) {
    res.status(500).json({ success: false, error: e });
  }
};
