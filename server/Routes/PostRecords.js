const express = require('express');
const router = express.Router();
const Records = require('../models/records');
const { Sequelize, QueryTypes } = require('sequelize');
const sequelize = require('../sequelize');

router.post('/records', async (req,res)=>{
    try{
        const census = req.body;
        const query = 
        `INSERT INTO census(name,is_vaccinated,birthdate,gender) values('${census.name}',${census.is_vaccinated},'${census.birthdate}','${census.gender}')`;

    const number_vaccinated = await sequelize.query(query, {type:QueryTypes.SELECT});                                                                
        res.status(200).json({              
            status:'sucess',                      
            data:number_vaccinated                                                                            
        });    
    }catch(error){                                     
        console.error('Error retrieving census records:',error);
        res.status(500).json({
            status:'error',
            message:'Failed to fetch census records',
        });

    }
});

module.exports = router;