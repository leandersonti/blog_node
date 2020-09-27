const bodyParser = require("body-parser")
const { render } = require("ejs")
const express =  require("express")
const app = express()

app.get("/",(req,resp)=>{
    resp.render("index.ejs")
})
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const Category = require("./categories/Category")
const Article = require("./Articles/Article")

const CategoriesController = require("./categories/CategoriesController")
const ArticlesController = require("./articles/ArticlesController")

app.use(CategoriesController)
app.use(ArticlesController)

app.set("view engine","ejs")



app.use(express.static("public"))
const connection = require("./database/connection")
connection.authenticate().then(()=>{
    console.log("db conectado")
}).catch((msg)=>{
    console.log("erro "+msg)
})

app.listen(4000,() => {
    console.log("servidor ativo")
})


