const bcrypt = require("bcrypt")
const {
  generateAccessToken,
  generateRefreshToken
} = require("../utils/token")

// SIMULASI DATABASE
const users = []
const refreshTokens = []

exports.register = async (req, res) => {
  const { email, password } = req.body

  const hashedPassword = await bcrypt.hash(password, 10)

  users.push({ email, password: hashedPassword })

  res.json({ message: "User registered" })
}

exports.login = async (req, res) => {
  const { email, password } = req.body

  const user = users.find(u => u.email === email)
  if (!user) return res.sendStatus(401)

  const match = await bcrypt.compare(password, user.password)
  if (!match) return res.sendStatus(401)

  const accessToken = generateAccessToken({ email })
  const refreshToken = generateRefreshToken({ email })

  refreshTokens.push(refreshToken)

  res.json({
    accessToken,
    refreshToken
  })
}
