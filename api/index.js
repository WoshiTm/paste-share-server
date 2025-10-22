const app = require("../app");
const connectToDatabase = require("../db/db");

export default async function handler(req, res) {
  try {
    await connectToDatabase();
    return app(req, res);
  } catch (err) {
    console.error("❌ 数据库连接失败:", err);
    res.status(500).json({
      code: 500,
      msg: "数据库连接失败",
      error: err.message,
    });
  }
}