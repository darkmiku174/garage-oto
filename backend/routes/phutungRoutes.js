import express from 'express'
import { getPhuTungList,addPhuTung, getPhuTungLoaiXe } from '../controllers/phutungControllers.js'

const router = express.Router()

router.get("/", getPhuTungList)
router.post("/add", addPhuTung)
router.get("/search", getPhuTungLoaiXe)
// router.get('/:Id', getProduct)


export default router