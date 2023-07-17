const express = require('express');
const router = express.Router();
const Records = require('../models/records');

router.get('/records', async (req,res)=>{
    try{
        const censusRecords = await Records.findAll();

        res.status(200).json({
            status:'sucess',
            data:censusRecords
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