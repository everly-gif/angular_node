var express = require("express");
const app = express();
var bodyParser = require("body-parser");
var path = require("path");
const { Client } = require('pg');
const cors = require("cors");
connectionString = "postgres://postgres:Finserv@2023@localhost:5432/test";

const client = new Client({
    connectionString: connectionString
})

client.connect();

app.use(bodyParser.urlencoded({extended:false}));
app.use(cors({
    origin: ['http://localhost:4200', 'https://www.google.com/']
}))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
  })

app.post("/update",(req,res) => {
 
    salary = eval(req.body.salary);
    id = eval(req.body.empid);
    
        client.query(`UPDATE EmpTable SET Salary = ${salary} WHERE EmpID = ${id};`, function (err, result) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                res.status(200).send(result.rows);
            });

    
})
app.get("/show",(req,res) => {
 
    
    
        client.query(`SELECT * FROM employee;`, function (err, result) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                res.status(200).send(result.rows);
            });

    
})

app.post("/delete",(req,res) => {

    id = eval(req.body.empid);
    
        client.query(`DELETE FROM EmpTable  WHERE EmpID = ${id};`, function (err, result) {
                if (err) {
                    console.log(err);
                    res.status(400).send(err);
                }
                res.status(200).send(result.rows);
            });

    
})

app.listen(5000, function () {
    console.log('Server is running.. on Port 5000');
});

