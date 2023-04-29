import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    res.json({msg : "Is Working"})
})

export default router;