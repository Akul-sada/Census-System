/*
select extract(year from age('2023-06-08T18:30:00.000Z',birthdate)) as age,count(gender) as number_others from census where gender='others' group by age order by number_others asc;
*/
const express = require('express');
const router = express.Router();
const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/number-not-vaccinated', async (req, res) => {
  try {
    const numberNotVaccinated = await prisma.$queryRaw`
      SELECT
        EXTRACT(YEAR FROM AGE('2023-06-08T18:30:00.000Z', birthdate)) AS age,
        COUNT(gender) AS number_others
      FROM
        Record
      WHERE
        gender = 'others'
      GROUP BY
        age
      ORDER BY
        number_others ASC
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

