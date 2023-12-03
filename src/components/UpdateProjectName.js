import { useState } from "react";

function UpdateProjectName() {
  const [projectId, setProjectId] = useState("");
  const [projectName, setProjectName] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdateProjectName = () => {
    fetch(`http://localhost:3001/updateProjectName/${projectId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ projectName }),
    })
      .then((response) => response.text())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Não foi possível atualizar o nome do projeto.", error);
        setMessage("Não foi possível atualizar o nome do projeto.");
      });
  };

  return (
    <div className="App">
      <h1>Atualizar Nome do Projeto</h1>
      <label>
        Projeto ID:
        <input
          type="text"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
        />
      </label>
      <br />
      <label>
        Novo Nome do Projeto:
        <input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleUpdateProjectName}>
        Atualizar Nome do Projeto
      </button>
      <br />
      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateProjectName;
