import pg from 'pg';
const { Pool } = pg;

export const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '1234',
  database: 'usuarios_db',
});

pool.on('connect', () => {
  console.log('✅ Conectado a PostgreSQL');
});