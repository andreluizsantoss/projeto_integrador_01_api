import { NextFunction, Request, Response } from 'express'
import { Secret, verify } from 'jsonwebtoken'
import authConfig from '@config/auth'

type JwtPayloadProps = {
  sub: string
}

export const isAuthenticated = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const authHeader = request.headers.authorization
  if (!authHeader) {
    return response.status(401).json({
      message: 'Access token invalid.',
    })
  }
  const token = authHeader.replace('Bearer ', '')
  if (!token) {
    return response.status(401).json({
      message: 'Access token invalid.',
    })
  }
  try {
    const decodedToken = verify(token, authConfig.jwt.secret as Secret)
    const { sub } = decodedToken as JwtPayloadProps
    request.user = { id: sub }
    console.log(request.user)
    return next()
  } catch {
    return response.status(401).json({
      message: 'Access token invalid.',
    })
  }
}
