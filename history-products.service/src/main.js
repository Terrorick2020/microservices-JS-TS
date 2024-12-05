import express from 'express'
import helmet from 'helmet'

import historyRouter from './app/history/history.routes.js'

import { notFound, errorHandler } from './middlewares/error.middleware'
import { HOST, PORT, PREFIX } from './env/main.env.js'


const app = express()

const start = () => {

    app.use( express.json() )
    app.use( helmet() )

    app.use( `/${PREFIX}`, historyRouter )

    app.use( notFound )
    app.use( errorHandler )

    app.listen( PORT, HOST, () => {
        console.log( `\n🚀 Сервер запущен по адресу: http://${ HOST }:${ PORT }/${PREFIX}\n` )
    })
}

start()