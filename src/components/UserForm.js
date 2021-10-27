import React from 'react'

import Input from "./Input.js";
import Button from "./Button";
import useFormulario from "../hooks/useFormulario";

const UserForm = ({submit}) => {
    const [formulario, handlechange, reset] = useFormulario({
        name: "",
        lastname: "",
        email: "",
      });
    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formulario)
        reset()
    }
    return (
        <form onSubmit={handleSubmit}>
        <Input
          label="Nombre"
          name="name"
          value={formulario.name}
          onChange={handlechange}
          placeholder='Nombre'
        />
        <Input
          label="Apellido"
          name="lastname"
          value={formulario.lastname}
          onChange={handlechange}
          placeholder='Apellido'
        />
        <Input
          label="Correo"
          name="email"
          value={formulario.email}
          onChange={handlechange}
          placeholder='Correo'
        />
        <Button>Enviar</Button>
      </form>
    )
}

export default UserForm
