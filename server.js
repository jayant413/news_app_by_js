const express = require('express')
const cors = require('cors')
const axios = require('axios')


const app = express();


app.use(cors());


const api = "ef8484e4379f4001b0783d7a2f44326b";


function getNews(category, api) {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${api}`)
}


app.get('/news/:category', async (req, res) => {
    try {
        const category = req.params.category
        const response = await getNews(category, api)
        res.send(response.data)
    } catch (error) {
        console.log(error)
    }
})


app.listen(8040, function () {
    console.log("Server started on port 8040")
})