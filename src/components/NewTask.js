import { useState } from "react";

function CreateTask() {
  const [taskName, setTaskName] = useState("");
  const [projectId, setProjectId] = useState("");
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");

  function handleCreateTask() {
    fetch("http://localhost:3001/createTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ taskName, projectId, userId }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Erro", error);
        setMessage("Não foi possível criar a tarefa.");
      });
  }

  return (
    <div className="App">
      <h1>Criar Nova Tarefa</h1>
      <label>
        Nome da Tarefa:
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </label>
      <br />
      <label>
        ID do Projeto:
        <input
          type="text"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
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
      <button onClick={handleCreateTask}>Criar Tarefa</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default CreateTask;
