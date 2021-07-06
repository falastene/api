const { request, response } = require("express");
const express = require("express");
const httpApp = express();
const bodyParser = require("body-parser");
const cors = require('cors')
httpApp.use(bodyParser.json());



//run the server from specific port

httpApp.listen(3000, () => {
    console.log('server is running in port ${3000} ');
});



//require for our db module 
var corsOptions = {
    origin: 'http://localhost:4200'
  }
  httpApp.use(cors({
    origin: '*',
    credentials: true
  }));//call db module from db.js file

//require for our db module 
const db = require('./db');

httpApp.listen(3000,()=>{
    console.log('start')
})

//End points
httpApp.post("/category/add", async(request, response) => {
    let[response,rows]=await db.connection.excute("insert into category (id ,category name ,category description ) values (?,?,?)")
    response.status(201).json(result);
});
httpApp.put('/category/edits/:id',async(request, response)=>{
    var id = request.params.id
    let sql="UPDATE category SET category name=?, category descriprion=? WHERE id=?"
    let result1=await db.connection.execute(sql,[request.body.category_name,request.body.category_description,id]);
    response.status(200).json("row edited");
});
httpApp.get('/category', async (request, response) => {
    let [result, rows] = await db.connection.execute("SELECT * FROM category")
    response.status(200).json(result)
})


