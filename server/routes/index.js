const router =  require('express').Router()
const article = require('./article')
const news = require('./news')

router.use('/articles',article)
router.use('/news',news)

module.exports =  router