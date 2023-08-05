const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/records', async (req, res) => {
  try {
    const censusRecords = await prisma.records.findMany();
    res.status(200).json({
      status: 'success',
      data: censusRecords
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