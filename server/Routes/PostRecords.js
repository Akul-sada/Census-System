const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.post('/records', async (req, res) => {
  try {
    const census = req.body;
    const record = await prisma.record.create({
      data: {
        name: census.name,
        is_vaccinated: census.is_vaccinated,
        birthdate: census.birthdate,
        gender: census.gender
      }
    });
    res.status(200).json({
      status: 'success',
      data: record
    });
  } catch (error) {
    console.error('Error retrieving census records:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch census records'
    });
  }
});

module.exports = router;