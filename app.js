import * as amqp from 'amqplib'
import dotenv from 'dotenv'
import http from 'http'

dotenv.config()

const handler = (req, res) => {
    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify({response:'its working'}))
}

http.createServer(handler).listen(process.env.PORT, () => console.log(`RUNNING AT ${process.env.PORT}`))
