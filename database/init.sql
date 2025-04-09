DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  telefono VARCHAR(20),
  cargo VARCHAR(100),
  correo VARCHAR(100)
);

-- Datos de ejemplo
INSERT INTO usuarios (nombre, telefono, cargo, correo) VALUES 
('Ana Torres', '3001234567', 'Recursos Humanos', 'ana@empresa.com'),
('Luis Pérez', '3107654321', 'Marketing', 'luis@empresa.com');

