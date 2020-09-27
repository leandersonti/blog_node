const express = require("express")
const { route } = require("../articles/ArticlesController")
const router = express.Router()
const Category = require("./Category")
const slug = require("slugify")
const { default: slugify } = require("slugify")

router.get("/categories",(req,resp)=>{
    resp.send("rota da categoria")
})

router.get("/admin/categories/new",(req,resp)=>{
    resp.render("./admin/categories/new")
})

router.post("/categories/save",(req,resp)=>{
    var title = req.body.title
    if(req.body.title != undefined){
        Category.create({
            title:title,
            slug:slugify(req.body.title)
        }).then(()=>{
            resp.redirect("/")
        })
    }else{
        resp.redirect("./admin/categories/new")
    }
})


router.get("/admin/categories",(req,resp)=>{
    resp.render("./admin/categories/index")
})

module.exports = router