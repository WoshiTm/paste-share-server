// db/db.js
const mongoose = require('mongoose');
const config = require('../config');

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

module.exports = async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(config.URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoose) => {
      console.log("✅ MongoDB connected");
      return mongoose;
    }).catch((err) => {
      console.error("❌ MongoDB connect failed:", err);
      throw err;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};