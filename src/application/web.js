import express from "express"
import {publicRouter, userRouter} from "../route/public-api.js";
import {errorMiddleware} from "../middleware/error-middleware.js";
export const web = express()
web.set('view engine', 'ejs')
web.use(express.static('public'))
web.use(express.json())
web.use (publicRouter)
web.use (errorMiddleware)
web.use (userRouter)
