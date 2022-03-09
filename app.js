import * as amqp from 'amqplib'
import http from 'http'

const PORT = 3002

const handler = (req, res) => {
    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify({response:'its working'}))
}

http.createServer(handler).listen(PORT, () => console.log(`RUNNING AT ${PORT}`))
