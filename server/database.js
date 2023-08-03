const { Pool } = require('pg');

const client =new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});





module.exports = client;