import dotenv from 'dotenv'

dotenv.config({ path: '.env' })


export const NODE_ENV = process.env.NODE_ENV
export const HOST     = process.env.HOST
export const PORT     = process.env.PORT
export const PREFIX   = process.env.PREFIX
export const isDev    = NODE_ENV === 'development'

if (
    !NODE_ENV ||
    !HOST     ||
    !PORT     ||
    !PREFIX  ||
    !isDev
) {
    throw new Error( 'Don`t have `.env`!' )
}
