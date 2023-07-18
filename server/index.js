const express = require("express");
const app = express();
const dotenv =require('dotenv');
const { PrismaClient, Prisma }= require('@prisma/client');
const prisma = new PrismaClient()
// const client = require('./database');
const cors = require('cors');
app.use(express.json());
app.use(cors());


dotenv.config({path:'./config.env'});



const recordsRoutes = require('./Routes/GetRecords');
const isvaccinatedRoutes = require('./Routes/isvaccinated');
const isvaccinated = require('./Routes/number-vaccinated');
const numberNotVaccinated = require('./Routes/number-not-vaccinated');
const numberGenderMale = require('./Routes/number-gender-male');
const numberGenderFemale = require('./Routes/number-gender-female');
app.use(recordsRoutes);
app.use(isvaccinatedRoutes);
app.use(isvaccinated);
app.use(numberNotVaccinated);
app.use(numberGenderMale);
app.use(numberGenderFemale);




async function main() {
    const query = Prisma.sql`
      INSERT INTO records (name, is_vaccinated, birthdate, gender)
      VALUES
        ('John Doe', true, '1990-05-15', 'male'),
        ('Jane', false, '1985-10-20', 'others'),
        ('Michael Johnson', true, '1992-03-28', 'male'),
        ('Emily Davis', true, '1998-07-12', 'female'),
        ('David Lee', false, '1995-09-03', 'male'),
        ('Sophia Smith', true, '1994-02-01', 'female'),
        ('Matthew Wilson', true, '1988-09-18', 'male'),
        ('Olivia Brown', false, '1999-06-05', 'female'),
        ('Jacob Taylor', true, '1993-11-30', 'male'),
        ('Emma Miller', false, '1991-07-22', 'female'),
        ('William Davis', true, '1997-04-10', 'male'),
        ('Ava Johnson', true, '1996-01-25', 'female'),
        ('James Anderson', false, '1987-08-08', 'male'),
        ('Sophia Thompson', true, '1998-03-14', 'female'),
        ('Benjamin Harris', true, '1992-12-05', 'male'),
        ('Isabella Martin', false, '<EUGPSCoordinates>7:09:17','female'), 
        ('Joseph White' ,true,'1994:06:30','male'), 
        ('Mia Jackson' ,true,'1991:02:13','female'), 
        ('Daniel Garcia' ,false,'1995:11:26','male'), 
        ('Charlotte Clark' ,true,'1997:08:09','female'), 
        ('Alexander Lewis' ,true,'1993:05:24','male'), 
        ('Emily Wright' ,false,'<EUGPSCoordinates>6:01.000Z','female'), 
        ('Henry Turner' ,true,'1996:06:19','male'), 
        ('Ella Hill' ,true,'1990:03:04','female'), 
        ('Samuel Walker' ,false,'1986:10:16','male'), 
        ('Grace Adams' ,true,'1992:07:29','female'), 
        ('Andrew Bennett' ,true,'1998:04:11','male'), 
        ('Sofia Roberts' ,false,'1995:01:26','female'), 
        ('Matthew King' ,true,'1993:09:20','male'), 
        ('Scarlett Scott' ,true,'1997:04:03','female');
    `;
  
    await prisma.$executeRaw(query);
  }
  
  main()
    .catch(e => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
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


const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`App running on port ${port}`);
});

