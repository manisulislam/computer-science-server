const express = require('express')
const app = express;
const port = process.env.port|| 5000;
const categories = require('./data/categories.json')

app.get('/', (req,res) =>{
    res.send('news api running')
})
app.get('/science-categories', (req, res)=>{
    res.send(categories)
})
app.listen(port, ()=>{
    console.log('computer science server running port', port)
} )