const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');
const mysql = require('mysql');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);

app.get('/api/customers', function(req, res){
    const connection = mysql.createConnection({
        host: conf.host,
        user: conf.user, 
        port: conf.port,
        password: conf.password,
        database : conf.database
    });
    
    const sqlQuery = 'select * from management.customer';
    connection.query(sqlQuery, function (err, result, field) {
        console.log('result',result);
        res.send(result);
    });
});

app.listen(port, () => console.log(`Listeing on port: ${port}`));