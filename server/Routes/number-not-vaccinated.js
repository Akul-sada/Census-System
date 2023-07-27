const express = require('express');
const router = express.Router();
const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/number-not-vaccinated', async (req, res) => {
  try {
    const numberNotVaccinated = await prisma.$queryRaw`
      SELECT
        EXTRACT(YEAR FROM AGE('2023-06-08T18:30:00.000Z', birthdate)) AS age,
        COUNT(is_vaccinated) AS number_not_vaccinated
      FROM
        Records
      WHERE
        is_vaccinated = false
      GROUP BY
        age
      ORDER BY
        age ASC
    `;
    res.status(200).json({
      status: 'success',
      data: numberNotVaccinated
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