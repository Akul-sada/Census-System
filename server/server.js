const express = require("express");
const app = express();
const dotenv =require('dotenv');
const client = require('./database');
app.use(express.json());

dotenv.config({path:'./config.env'});

client.connect();
// Gets all the columns from the database
app.get('/records',(req,res)=>{
    client.query(`select * from census`,(err,result)=>{
        if(!err){
            res.status(201).json({
                status:'success',
                data:{
                    result:result.rows
                }
                
            });
        }
    });
    client.end;
});

app.get('/isvaccinated',(req,res)=>{
    client.query(`select is_vaccinated from census;`,(err,result)=>{
        console.log(result);
        if(!err){
            res.status(201).json({
                status:'success',
                data:result.rows
            });
        }
    });
    client.end;
});

app.get('/age',(req,res)=>{
    client.query(`select extract(year from age('2023-06-08T18:30:00.000Z',birthdate)) as age from census;`,(err,result)=>{
        console.log(result);
        if(!err){
            res.status(201).json({
                status:'success',
                data:result.rows
            });
        }
    });
    client.end;
});

app.post('/records',(req,res)=>{
    const census =req.body;
    console.log(census,census.name,census.is_vaccinated,census.birthdate,census.gender);
    let insertQuery = client.query(`INSERT INTO census(name,is_vaccinated,birthdate,gender) values('${census.name}',${census.is_vaccinated},'${census.birthdate}','${census.gender}')`);
    client.query(insertQuery,(err,result)=>{
        console.log(result);
        if(!err){
            res.send('data added successfuly');
        }else{
            console.log(err.message);
        }
    });
    client.end;
});

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`App running on port ${port}`);
});

