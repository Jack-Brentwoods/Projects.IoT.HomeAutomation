const { Pool } = require('pg');
const dbConfig = require('../config/db.config.js');

const pool = new Pool({
    user: dbConfig.user,
    host: dbConfig.host,
    database: dbConfig.database,
    password: dbConfig.password,
    port: dbConfig.port
});

pool.on('connect', () => {
    console.log('Connected to the PostgreSQL database');
});

pool.on('error', (err) => {
    console.error("Unexpected error on idel client", err);
    process.exit(-1);
});

module.exports = pool;