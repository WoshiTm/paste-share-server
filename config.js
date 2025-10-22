const config = {
  URL: process.env.MONGODB_URL,   // ✅ 注意这里要和 Vercel 环境变量名完全一致
  session_secret: process.env.SESSION_SECRET || 'chuckle',
  token_secret: process.env.TOKEN_SECRET || 'chuckle'
};

module.exports = config;