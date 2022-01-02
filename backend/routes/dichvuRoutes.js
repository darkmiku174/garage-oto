import express from 'express'
import { addDichVu, getDichVuList } from '../controllers/dichvuControllers.js'

const router = express.Router()

router.get("/", getDichVuList)
router.post("/add", addDichVu)
// router.get("/search", getProductLike)
// router.get('/:Id', getProduct)


export default router