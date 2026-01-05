const bcrypt = require("bcrypt")
const { generateAccessToken, generateRefreshToken } = require("../utils/token")


const users = []
const refreshTokens = []

exports.egister = async(req, res) => {

  const { email, password } = req.body

  const hashedPassword =  await bcrypt.hash(password, 10)

  users.push({email, password: hashedPassword})

  res.json({
    message: "User Registered"
  })
}

exports.login = async(req, res) => {

  const { email, password } = req.body

  const user = await users.find(u => u.email === email)
  if(!user) return res.sendStatus(401)

  const match = await bcrypt.compare(password, users.password)
  if(!match) return res.sendStatus(401)

  const accessToken = generateAccessToken({email})
  const refreshToken = generateRefreshToken({email})

  refreshTokens.push(refreshToken)

  res.json({
    accessToken, 
    refreshToken
  })
}

exports.refresh = async() => {}

