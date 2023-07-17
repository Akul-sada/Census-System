const express = require('express');
const router = express.Router();
const Records = require('../models/records');
const { Sequelize, QueryTypes } = require('sequelize');
const sequelize = require('../sequelize');

router.get('/number-not-vaccinated', async (req,res)=>{
    try{
        const query = `
        select extract(year from age('2023-06-08T18:30:00.000Z',birthdate)) as age,count(is_vaccinated) as number_not_vaccinated from census where is_vaccinated='false' group by age order by age asc;  
    `;

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