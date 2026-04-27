import mysql from 'mysql2/promise';
import fs from 'fs';
import 'dotenv/config';

const run = async () => {

  if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_NAME) {
    throw new Error('Faltam variáveis de ambiente. Verifique o arquivo .env');
  }

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    multipleStatements: true
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);
  await connection.query(`USE ${process.env.DB_NAME}`);

  const sql = fs.readFileSync('migrations/001_create_user_table.sql', 'utf-8');

  await connection.query(sql);

  console.log('Migration executada com sucesso');

  await connection.end();
};

run();