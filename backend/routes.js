const express = require('express');
const router = express.Router();
const db = require('./db');

// GET - Listar todos
router.get('/usuarios', (req, res) => {
  const sql = 'SELECT * FROM usuarios';
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// POST - Crear un usuario
router.post('/usuarios', (req, res) => {
  const { nombre, telefono, cargo, correo } = req.body;
  const sql = 'INSERT INTO usuarios (nombre, telefono, cargo, correo) VALUES (?, ?, ?, ?)';
  db.query(sql, [nombre, telefono, cargo, correo], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({
      id: result.insertId,
      nombre,
      telefono,
      cargo,
      correo
    });
  });
});

// PUT - Actualizar usuario
router.put('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, telefono, cargo, correo } = req.body;
  const sql = 'UPDATE usuarios SET nombre=?, telefono=?, cargo=?, correo=? WHERE id=?';
  db.query(sql, [nombre, telefono, cargo, correo, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id, nombre, telefono, cargo, correo });
  });
});

// DELETE - Eliminar usuario
router.delete('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM usuarios WHERE id=?';
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.sendStatus(204); // No content
  });
});

module.exports = router;
