import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'

import productsRouter from './app/products/products.routes'
import stocksRouter from './app/stocks/stocks.routes'

import { prisma } from './app/prisma'
import { notFound, errorHandler } from './middlewares/error.middleware'

import {
  PORT,
  HOST,
  PREFIX,
  isDev
} from './config/main.config'


const start = async () => {
  const app = express()

  app.use( express.static('./src/public/data') )
  app.use( express.json() )
  app.use( cookieParser() )
  app.use( helmet() )

  if( isDev ) app.use( morgan( 'dev' ) )
  if( isDev ) app.use( cors() )

  app.use( `/${PREFIX}`, productsRouter )
  app.use( `/${PREFIX}`, stocksRouter )

  app.use( notFound )
  app.use( errorHandler )


  app.listen( PORT, HOST, () => {
    console.log( `\n🚀 Сервер запущен по адресу: http://${ HOST }:${ PORT }/${PREFIX}\n` )
  } )
}

start()
  .then( async () => {
    await prisma.$disconnect()
  })
  .catch( async err => {
    console.debug( err )
    await prisma.$disconnect
    process.exit( 1 )
  })
