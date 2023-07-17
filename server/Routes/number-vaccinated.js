const express = require('express');
const router = express.Router();
const Records = require('../models/records');
const { Sequelize, QueryTypes } = require('sequelize');
const sequelize = require('../sequelize');

router.get('/number-vaccinated', async (req,res)=>{
    try{
        const query = `
      SELECT EXTRACT(YEAR FROM AGE('2023-06-08T18:30:00.000Z', birthdate)) AS age, COUNT(is_vaccinated) AS number_vaccinated
      FROM census
      WHERE is_vaccinated = 'true'
      GROUP BY EXTRACT(YEAR FROM AGE('2023-06-08T18:30:00.000Z', birthdate))
      ORDER BY EXTRACT(YEAR FROM AGE('2023-06-08T18:30:00.000Z', birthdate)) ASC;
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