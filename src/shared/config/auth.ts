import { env } from '@shared/env'

export default {
  jwt: {
    secret: env.JWT_SECRET,
    expiresIn: env.JWT_EXPIRES_IN,
  },
  refreshToken: {
    secret: env.REFRESH_SECRET,
    expiresIn: env.REFRESH_EXPIRES_IN,
    notBefore: env.NOT_BEFORE,
  },
}
