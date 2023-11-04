import { updateEmployee } from "../js/requests";
import { useState } from "react";

const UpdateForm = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [dirrecion, setDireccion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(4, nombre, apellido, email, telefono, dirrecion);
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      action=""
    >
      <label htmlFor="">Nombre</label>
      <input
        value={nombre}
        onChange={(e) => {
          setNombre(e.target.value);
        }}
        type="text"
        name=""
        id=""
        placeholder="nombre"
      />
      <label htmlFor="">Apellido</label>
      <input
        value={apellido}
        onChange={(e) => {
          setApellido(e.target.value);
        }}
        type="text"
        name=""
        id=""
        placeholder="apellido"
      />
      <label htmlFor="">Email</label>
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="text"
        name=""
        id=""
        placeholder="email"
      />
      <label htmlFor="">Telefono</label>
      <input
        value={telefono}
        onChange={(e) => {
          setTelefono(e.target.value);
        }}
        type="text"
        name=""
        id=""
        placeholder="Telefono"
      />
      <label htmlFor="">Dirrecion</label>
      <input
        value={dirrecion}
        onChange={(e) => {
          setDireccion(e.target.value);
        }}
        type="text"
        name=""
        id=""
        placeholder="direccion"
      />
      <button type="submit">Actualizar</button>
    </form>
  );
};

export default UpdateForm;
