const axios = require('axios')
const errorHandler = require("../middleware/errorHandler")
class newsController{
    static getNews(req, res, next){
        axios({
            method: 'GET',
            url:'https://api.nytimes.com/svc/news/v3/content/all/all.json',
            params:{"q":req.params.query, "page":req.params.page, "limit":req.params.limit,
             "api-key":process.env.NY_API_KEY}
        })
        .then(response => {
            res.status(200).json(response.data)
        })
        .catch(err => {
            next({
                name: err.response.data.fault.faultstring
            })
        })
    }
}

module.exports = newsController