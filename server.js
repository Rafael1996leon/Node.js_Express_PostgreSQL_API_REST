import express from 'express';
import cors from 'cors';
import { pool } from './db.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'API de Usuarios' });
});

// POST - Registrar usuario
app.post('/usuarios', async (req, res) => {
  try {
    const { nombre, correo, contraseña } = req.body;
    const result = await pool.query(
      'INSERT INTO usuarios (nombre, correo, contraseña) VALUES ($1, $2, $3) RETURNING *',
      [nombre, correo, contraseña]
    );
    res.status(201).json({ mensaje: 'Usuario registrado', usuario: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET - Listar usuarios
app.get('/usuarios', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM usuarios ORDER BY id');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
});