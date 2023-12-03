import { useState } from "react";

function UpdateTaskStatus() {
  const [taskId, setTaskId] = useState("");
  const [statusId, setStatusId] = useState("");
  const [message, setMessage] = useState("");

  function handleUpdateTaskStatus() {
    fetch(`http://localhost:3001/updateTaskStatus/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ statusId }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Não foi possível atualizar o status da tarefa.", error);
        setMessage("Não foi possível atualizar o status da tarefa .");
      });
  }

  return (
    <div className="App">
      <h1>Atualizar status da tarefa</h1>
      <label>
        ID da tarefa:
        <input
          type="text"
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
        />
      </label>
      <br />
      <label>
        ID do status atualizado(1 - Não iniciada, 2- Iniciada, 3- Concluída):
        <input
          type="text"
          value={statusId}
          onChange={(e) => setStatusId(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleUpdateTaskStatus}>Atualizar Status</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UpdateTaskStatus;
