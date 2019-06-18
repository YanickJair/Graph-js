import express, {Application, NextFunction, Response, Request} from 'express'

/**
 * @description
 *  *   If PORT not given, use default: 8080
 * @param port 
 */
export function init(port?: number) {
    let app: Application
    if (typeof port === 'undefined') {
        app = express()
        app.listen(8080, (req: Request, res: Response, next: NextFunction) => {
            console.log(`Server running at: http://localhost:8080`)
        })
    } else {
        app = express()
        app.listen(port, () => {
            console.log(`Server running at: http://localhost:${port}`)
        })
    }
}