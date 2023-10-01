// lib & middle
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import YAML from 'yamljs'
import { Server } from 'socket.io'
import session from "express-session"
import swaggerUi from 'swagger-ui-express'
// import { verifyAdmin, verifyToken } from "./middleware/verify.js"
// import { clearTokenList } from "./service/jwt.js"
// import { NOTIFY_EVENT, SESSION_AGE } from "./constant.js"
// import { addSocketSession, handleDisconnect, sendNotify } from "./socket/handle.js"
import helmet from "helmet"
import morgan from "morgan"
import compression from "compression"
// import { checkOverload } from "./helper/checkConnectdb.js"
const swaggerDocument = YAML.load('./swagger.yaml')

// dotevn config

dotenv.config()

/**
 * Connect MongoDB
 */
mongoose.connect(process.env.MONGO_URI, { maxPoolSize: 100 })
const db = mongoose.connection
db.on('error', () => console.log('MongoDB connection error.'))
db.once('open', () => {
    console.log('Connected to MongoDB successfully.')
    // mongoose.set("debug", true)
    // mongoose.set("debug", { color: true })
})
// checkOverload()
const PORT = process.env.PORT || 8000
const DEV = process.env.DEV == 1
export const TOKEN_LIST = {}
export const TOKEN_BLACKLIST = {}
export const SOCKET_SESSIONS = []
const app = express()
const io = new Server(process.env.SOCKET_PORT, {
    cors: {
        origin: '*'
    }
})
const store = new session.MemoryStore()

app.use(session({
    secret: process.env.SESSION_NAME,
    cookie: { maxAge: SESSION_AGE },
    saveUninitialized: false,
    store,
    resave: false
}))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors(
    {
        origin: process.env.DEV == 1 ? 'http://localhost:8000' : [`http://${process.env.HOST}`, `https://${process.env.HOST}`],
        credentials: true
    }
))
// app.use(helmet())
app.use(morgan("dev"))
app.use(compression())

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// app.get('/favico.ico', (req, res) => {
//     res.sendStatus(404);
// });

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/*', async (req, res) => {
    res.status(501).send("Don't implement.")
})
// app.use(express.static('public'));
// app.use('/public', express.static('public'));

// app.use(express.static(path.join(__dirname, process.env.BUILD_DIST)));

// app.get('/*', async (req, res) => {
//     try {
//         res.sendFile(path.join(__dirname, process.env.BUILD_DIST + 'index.html'))
//     } catch (error) {
//         console.log(error.message)
//         res.sendStatus(500)
//     }
// })

io.on(NOTIFY_EVENT.connection, socket => {

    socket.on(NOTIFY_EVENT.disconnect, () => {
        handleDisconnect(socket)
    })

    socket.on(NOTIFY_EVENT.addSession, userId => {
        addSocketSession(socket, userId)
    })

    socket.on(NOTIFY_EVENT.send, (userId, data) => {
        sendNotify(io, userId, data)
    })
})

app.listen(PORT, () => {
    console.log(`Server start at port: ${PORT}`)
})
// app.listen(() => {
//     sendMailToCafllet()
// })
// app.listen(() => {
//     sendMailToDriver()
// })
setInterval(() => {
    clearTokenList(TOKEN_BLACKLIST)
}, 3600000)
