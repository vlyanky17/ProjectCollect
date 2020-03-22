const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {console.log('mid0')
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
console.log('mid1')
    const token = req.headers.authorization.split(' ')[1] // "Bearer TOKEN"
    console.log('mid2')
    if (!token) {
      return res.status(401).json({ message: 'токен Нет авторизации' })
    }
    console.log('mid3')
    const decoded = jwt.verify(token, config.get('jwtSek'))
    req.user = decoded
    next()

  } catch (e) {
    res.status(401).json({ message: 'общая  Нет авторизации' })
  }
}
