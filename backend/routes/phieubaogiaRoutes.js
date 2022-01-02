import express from 'express'
import { getPhieuBaoGiaList } from '../controllers/phieubaogiaControllers.js'

const router = express.Router()

router.get("/", getPhieuBaoGiaList)
// router.post("/add", addProduct)
// router.get("/search", getProductLike)
// router.get('/:Id', getProduct)


export default router