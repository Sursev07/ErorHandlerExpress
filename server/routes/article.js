const route = require('express').Router()
const articleController = require('../controllers/articleControllers')

route.get('/', articleController.findAll)
route.post('/', articleController.addArticle)
route.put('/:id', articleController.updateArticle)
route.delete('/:id', articleController.deleteArticle)

module.exports = route