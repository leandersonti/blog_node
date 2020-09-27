const Sequelize = require("sequelize")
const connection = require("../database/connection")
const Category = require("../categories/Category")


const Article = connection.define('articles',{
    article:{
        type:Sequelize.STRING,
        allowNull:false
    },
    slug:{
        type:Sequelize.STRING,
        allowNull:false
    },
    body:{
        type:Sequelize.TEXT,
        allowNull:false
    }
})

Article.hasMany(Article)
Article.belongsTo(Category)


module.exports = Article