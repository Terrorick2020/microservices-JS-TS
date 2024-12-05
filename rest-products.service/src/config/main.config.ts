import dotenv from 'dotenv'

dotenv.config({ path: '.env' })


export const NODE_ENV = String( process.env.NODE_ENV ) || 'development'
export const PORT     = Number( process.env.PORT )     || 3000
export const HOST     = String( process.env.HOST )     || 'localhost'
export const PREFIX   = String( process.env.PREFIX )   || ''
export const isDev    = NODE_ENV === 'development'
