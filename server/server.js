const express = require("express");
const app = express();
const dotenv =require('dotenv');
const client = require('./database');
const cors = require('cors');
app.use(express.json());
app.use(cors());

dotenv.config({path:'./config.env'});

client.connect();

const recordsRoutes = require('./Routes/records');

app.use(recordsRoutes);

// Gets all the columns from the database
// app.get('/records',(req,res)=>{
//     client.query(`select * from census order by birthdate desc`,(err,result)=>{
//         if(!err){
//             res.status(201).json({
//                 status:'success',
//                 data:result.rows
//             });
//         }
//     });
//     client.end;
// });

// app.get('/isvaccinated',(req,res)=>{
//     client.query(`select is_vaccinated from census;`,(err,result)=>{
//         console.log(result);
//         if(!err){
//             res.status(201).json({
//                 status:'success',
//                 data:result.rows
//             });
//         }
//     });
//     client.end;
// });

// app.get('/age',(req,res)=>{
//     client.query(`select extract(year from age('2023-06-08T18:30:00.000Z',birthdate)) as age,count(is_vaccinated) from census where is_vaccinated='true' group by age order by age asc;`,(err,result)=>{
//         console.log(result);
//         if(!err){
//             res.status(201).json({
//                 status:'success',
//                 data:result.rows
//             });
//         }
//     });
//     client.end;
// });
// Get number of number of people who got vaccinated in the age
// app.get('/number-vaccinated',(req,res)=>{
//     client.query(`select extract(year from age('2023-06-08T18:30:00.000Z',birthdate)) as age,count(is_vaccinated) as number_vaccinated from census where is_vaccinated='true' group by age order by age asc;`,(err,result)=>{

//         if(!err){
//             res.status(201).json({
//                 data:result.rows
//             });
//         }
//     });
//     client.end;
// });

// Get number of number of people who didnot get vaccinated in the age
// app.get('/number-not-vaccinated',(req,res)=>{
//     client.query(`select extract(year from age('2023-06-08T18:30:00.000Z',birthdate)) as age,count(is_vaccinated) as number_not_vaccinated from census where is_vaccinated='false' group by age order by age asc;`,(err,result)=>{
    
//         if(!err){
//             res.status(201).json({
//                 data:result.rows
//             });
//         }
//     });
//     client.end;
// });


// number of people from each gender polled for the census 

// app.get('/number-gender-male',(req,res)=>{
//     client.query(`select extract(year from age('2023-06-08T18:30:00.000Z',birthdate)) as age,count(gender) as number_male from census where gender='male' group by age order by number_male asc;`,(err,result)=>{

//         if(!err){
//             res.status(201).json({
//                 data:result.rows
//             });
//         }
//     });
//     client.end;
// });
// app.get('/number-gender-female',(req,res)=>{
//     client.query(`select extract(year from age('2023-06-08T18:30:00.000Z',birthdate)) as age,count(gender) as number_female from census where gender='female' group by age order by number_female asc;`,(err,result)=>{

//         if(!err){
//             res.status(201).json({
//                 data:result.rows
//             });
//         }
//     });
//     client.end;
// });
// app.get('/number-gender-others',(req,res)=>{
//     client.query(`select extract(year from age('2023-06-08T18:30:00.000Z',birthdate)) as age,count(gender) as number_others from census where gender='others' group by age order by number_others asc;`,(err,result)=>{

//         if(!err){
//             res.status(201).json({
//                 data:result.rows
//             });
//         }
//     });
//     client.end;
// });


// app.post('/records',(req,res)=>{
//     const census = req.body;
//     client.query(`INSERT INTO census(name,is_vaccinated,birthdate,gender) values('${census.name}',${census.is_vaccinated},'${census.birthdate}','${census.gender}')`,(err,result)=>{
//         console.log(result);
//         if(!err){
//             res.send('data added successfuly');
//         }else{
//             console.log(err.message);
//         }
//     });
//     client.end;
// });


// ////////////////////////////////////////////////////////////////////////////////////////////
                            // Start the Server

///////////////////////////////////////////////////////////////////////////////////////////////


const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`App running on port ${port}`);
});

