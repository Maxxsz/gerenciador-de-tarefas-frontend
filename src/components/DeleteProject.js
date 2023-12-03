import { useState } from "react";

const DeleteProject = function DeleteProject() {
  const [projectId, setProjectId] = useState("");
  const [message, setMessage] = useState("");

  const handleDeleteProject = () => {
    fetch(`http://localhost:3001/deleteProject/${projectId}`, {
      method: "DELETE",
    })
      .then((response) => response.text())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Não foi possivel remover projeto.", error);
        setMessage("Não foi possivel remover projeto.");
      });
  };

  return (
    <div className="App">
      <h1>Remover Projeto</h1>
      <label>
        ID do Projeto:
        <input
          type="text"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleDeleteProject}>Excluir Projeto</button>
      <br />
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteProject;
