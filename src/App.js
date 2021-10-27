import React, { useState } from "react";
import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input.js";
import Card from "./components/Card.js";
import Container from "./components/Container.js";
import Button from "./components/Button.js";

const App = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [formulario, handlechange, reset] = useFormulario({
    name: "",
    lastname: "",
    email: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setUsuarios([...usuarios, formulario]);
    reset();
  };

  return (
    <div style={{marginTop:'15%'}}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
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
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map((usuario) => (
              <li
                key={usuario.email}
              >{`${usuario.name} ${usuario.lastname}: ${usuario.email}`}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </div>
  );
};

export default App;
