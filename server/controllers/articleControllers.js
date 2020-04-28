const {Article} = require('../models')

class articleController{
    static findAll(req,res, next){
        Article.findAll()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            next(err)
        })
    }

    static addArticle(req, res, next){
        console.log(req.body)
        var articleObj = {
            title: req.body.title,
            description: req.body.description
        }
        Article.create(articleObj)
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            next(err)
        })
    }

    static updateArticle(req, res, next){
        var id = req.params.id
        var objArticle = {
            title : req.body.title,
            description: req.body.description
        }

        Article.update(objArticle, {where : {id : id}})
        .then(data=> {
            if(data == 1){
                res.status(200).json({message: "data successfully updated"})
            }
            else {
                next({name:"DataNotFound", message : `data with id ${id} was not found`})
                //res.status(404).json({message:"data not found"})
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    static deleteArticle(req, res){
     var id = req.params.id
      Article.destroy({where : {id: id}})
      .then(data => {
          res.status(200).json(data)
      })
      .catch(err => {
          console.log(err)
      })
    }
}

module.exports = articleController