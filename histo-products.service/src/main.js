import express from 'express'

import { HOST, PORT, PREFIX } from './env/main.config.js'


const app = express()

const start = () => {
    app.listen( PORT, HOST, () => {
        console.log( `\n🚀 Сервер запущен по адресу: http://${ HOST }:${ PORT }/${PREFIX}\n` )
    })
}

start()