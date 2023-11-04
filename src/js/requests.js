export const allEmployees = async () => {
  const res = await fetch(`http://localhost:8080/api/empleados`);
  return res.json();
};

export const updateEmployee = async (
  id,
  nombre,
  apellido,
  email,
  telefono,
  dirreccion
) => {

    const datos = {
        name: nombre,
        lastName: apellido,
        email,
        phone: telefono,
        address: dirreccion
    }

  const res = await fetch(`http://localhost:8080/api/empleado/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  });
  return res;
};
