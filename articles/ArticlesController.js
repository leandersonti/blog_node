const express = require("express")
const router = express.Router()

router.get("/articles",(req,resp)=>{
    resp.send("rota dos artigos")
})

module.exports = router