import { mkdir } from "fs"
import { sendError, sendServerError } from "../helper/client.js"
import fs from 'fs'
import multer from 'multer'
import path from 'path'

export const createUploadDir = (req, res, next) => {
    const d = new Date()
    const dirName = d.toISOString().slice(0, 7)
    mkdir(`public/uploads/${dirName}`, { recursive: true }, (err) => {
        if (err) return sendError(res, 'Cannot upload file.')
    })
    req.dirName = dirName
    next()
}
