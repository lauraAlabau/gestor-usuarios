import React, { useState } from "react";

import Card from "./components/Card.js";
import Container from "./components/Container.js";
import UserForm from "./components/UserForm.js";

const App = () => {
  const [usuarios, setUsuarios] = useState([]);

  const submit = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };
  console.log(usuarios);
  return (
    <div style={{ marginTop: "15%" }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} />
          </div>
        </Card>
        <Card>
          <div style={{ padding: 20 }}>
            <ul>
              {usuarios.map((usuario) => (
                <li
                  style={{ listStylePosition: "inside", listStyleType: "none" }}
                  key={usuario.email}
                >{`${usuario.name} ${usuario.lastname}: ${usuario.email}`}</li>
              ))}
            </ul>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default App;
