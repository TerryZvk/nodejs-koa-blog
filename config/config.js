module.exports = {
  environment: 'dev',
  database: {
    dbName: 'blogDB',
    host: 'localhost',
    port: 3306,
    user: 'root'
    // password: '19910809'
  },
  security: {
    secretKey: "secretKey",
    // 过期时间 1小时
    expiresIn: 60 * 60
  }
}
