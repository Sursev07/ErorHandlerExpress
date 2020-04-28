const route = require('express').Router()
const newsConstroller = require('../controllers/newsController')

route.get('/', newsConstroller.getNews)

module.exports = route