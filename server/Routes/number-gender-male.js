const express = require('express');
const router = express.Router();
const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/number-gender-male', async (req, res) => {
  try {
    const numberMale = await prisma.$queryRaw`
      SELECT
        EXTRACT(YEAR FROM AGE('2023-06-08T18:30:00.000Z', birthdate)) AS age,
        COUNT(gender) AS number_male
      FROM
        Records
      WHERE
        gender = 'male'
      GROUP BY
        age
      ORDER BY
        number_male ASC
    `;
    res.status(200).json({
      status: 'success',
      data: numberMale
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