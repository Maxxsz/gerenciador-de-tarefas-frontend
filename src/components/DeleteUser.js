import { useState } from "react";

function DeleteUser() {
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");

  function handleDeleteUser() {
    fetch(`http://localhost:3001/deleteUser/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        console.log(data.message);
      })
      .catch((error) => {
        console.error("Não foi possivel remover o usuário.", error);
        setMessage("Não foi possível remover o usuário.");
      });
  }

  return (
    <div className="App">
      <h1>Remover usuário</h1>
      <label>
        ID do usuário:
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleDeleteUser}>Remover Usuário</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default DeleteUser;
