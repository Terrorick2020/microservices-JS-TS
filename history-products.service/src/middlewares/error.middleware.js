import { isDev } from '../env/main.config'


export const notFound = ( req, res, next ) => {
    const err = new Error( `Not found - ${ req.originalUrl }` )
    res.status( 404 )
    next( err )
}

export const errorHandler = ( err, _req, res, _next ) => {
    const statusCode = res.statusCode === 200 ? 500: res.statusCode
    res
        .status( statusCode )
        .json({
            message: err.message,
            stack:   isDev ? err.stack : null
        })
}
