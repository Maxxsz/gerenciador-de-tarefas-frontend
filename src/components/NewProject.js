import { useState } from "react";

const CreateProject = function CreateProject() {
  const [projectName, setProjectName] = useState("");
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");

  function handleCreateProject() {
    fetch("http://localhost:3001/createProject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ projectName, userId }),
    })
      .then((response) => response.text())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error(error);
        setMessage("Não foi possível criar o projeto.");
      });
  }

  return (
    <div className="App">
      <h1>Criar Projeto</h1>
      <label>
        Nome do Projeto:
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </label>
      <br />
      <label>
        ID do Usuário:
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleCreateProject}>Criar Projeto</button>
      <br />
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateProject;
