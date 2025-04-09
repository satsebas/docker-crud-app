const API_URL = "http://localhost:3000/api/usuarios";

// Función para cargar y mostrar los usuarios en la tabla
async function fetchUsers() {
  const res = await fetch(API_URL);
  const users = await res.json();
  const tbody = document.querySelector("#usersTable tbody");
  tbody.innerHTML = "";

  users.forEach(user => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${user.nombre}</td>
      <td>${user.telefono}</td>
      <td>${user.cargo}</td>
      <td>${user.correo}</td>
      <td>
        <button onclick="editUser(${user.id}, '${escapeStr(user.nombre)}', '${escapeStr(user.telefono)}', '${escapeStr(user.cargo)}', '${escapeStr(user.correo)}')">Editar</button>
        <button onclick="deleteUser(${user.id})">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

// Función auxiliar para escapar comillas simples en cadenas
function escapeStr(str) {
  if (!str) return "";
  return str.replace(/'/g, "\\'");
}

// Manejo del submit del formulario para crear o actualizar usuario
document.getElementById('userForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const id = document.getElementById("userId").value;
  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const cargo = document.getElementById("cargo").value;
  const correo = document.getElementById("correo").value;

  if (id === "") {
    // Crear un nuevo usuario
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, telefono, cargo, correo })
    });
  } else {
    // Actualizar usuario existente
    await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, telefono, cargo, correo })
    });
  }
  
  document.getElementById("userForm").reset();
  document.getElementById("userId").value = "";
  document.getElementById("submitButton").textContent = "Crear";
  document.getElementById("cancelButton").style.display = "none";
  fetchUsers();
});

// Función que se llama al presionar "Editar" en un registro
function editUser(id, nombre, telefono, cargo, correo) {
  document.getElementById("userId").value = id;
  document.getElementById("nombre").value = nombre;
  document.getElementById("telefono").value = telefono;
  document.getElementById("cargo").value = cargo;
  document.getElementById("correo").value = correo;
  document.getElementById("submitButton").textContent = "Guardar cambios";
  document.getElementById("cancelButton").style.display = "inline";
}

// Botón para cancelar la edición y reiniciar el formulario
document.getElementById("cancelButton").addEventListener("click", () => {
  document.getElementById("userForm").reset();
  document.getElementById("userId").value = "";
  document.getElementById("submitButton").textContent = "Crear";
  document.getElementById("cancelButton").style.display = "none";
});

// Función para eliminar un usuario
async function deleteUser(id) {
  if (confirm("¿Seguro que deseas eliminar este usuario?")) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchUsers();
  }
}

// Cargar usuarios al inicio
fetchUsers();
