import { Request, Response, NextFunction } from 'express'
import { isDev } from '../config/main.config'


export const notFound = ( req: Request, res: Response, next: NextFunction ) => {
    const err = new Error( `Not found - ${ req.originalUrl }` )
    res.status( 404 )
    next( err )
}

export const errorHandler = ( err: Error, _req: Request, res: Response, _next: NextFunction ) => {
    const statusCode = res.statusCode === 200 ? 500: res.statusCode
    res
        .status( statusCode )
        .json({
            message: err.message,
            stack:   isDev ? err.stack : null
        })
}
