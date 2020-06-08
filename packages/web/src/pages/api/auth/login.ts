import Cryptr from 'cryptr'
import { serialize } from 'cookie'

export default async function handle(req, res) {
  const { password } = JSON.parse(req.body)

  const correctPassword = process.env.STORE_PASSWORD

  if (!password || password !== correctPassword) {
    return res.status(401).json({ success: false, message: 'Invalid Password' })
  }

  const cryptr = new Cryptr(process.env.STORE_PASSWORD_TOKEN)
  const encryptedToken = cryptr.encrypt(password)

  res.setHeader(
    'Set-Cookie',
    serialize('session', encryptedToken, {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    })
  )

  return res
    .status(200)
    .json({ success: true, mesasge: 'Successfully logged in' })
}
