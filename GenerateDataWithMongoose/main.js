const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require("./models/Employee")
conn = mongoose.connect('mongodb://127.0.0.1:27017/company');
const port = 3000

app.set('view engine', 'ejs');

const getRandom = (arr)=>{
    let randomNo = Math.floor(Math.random() * (arr.length - 1))
    return arr[randomNo]
}

app.get('/', (req, res) => {
    res.render('index', { foo: 'FOO' });
})

app.get('/generate', async(req, res) => {
     await Employee.deleteMany({}) 
     let rNames = ['Shuvo', "Shohan", "Jibon", "Sakib"]
     let rLang = ["JavaScript", "Java", "Python", "C++"]
     let rCities = ["Dhaka", "Rajshahi", "Chittagong", "Sylhet"]
    for (let index = 0; index < 10; index++) {
        let e = await Employee.create({
            name: getRandom(rNames),
            salary: Math.floor(Math.random() * 22000),
            language: getRandom(rLang),
            city: getRandom(rCities),
            isManager: true
        })
        console.log(e)
    }
    res.render('index', { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})