import { useState } from "react";

function CreateNewUser() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleCreateUser() {
    fetch("http://localhost:3001/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error(error);
        setMessage("Não foi possível criar o usuário.");
      });
  }

  return (
    <div className="App">
      <h1>Criar novo usuário</h1>
      <label>
        Nome do usuário:
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleCreateUser}>Criar Usuário</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateNewUser;
