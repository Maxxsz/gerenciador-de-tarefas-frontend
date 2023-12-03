import { useState } from "react";

const History = function HistoryByTask() {
  const [history, setHistory] = useState(null);
  const [taskId, setTaskId] = useState("");
  const [error, setError] = useState(null);

  function getHistory() {
    fetch(`http://localhost:3001/getHistoryByTask/${taskId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setHistory(data.map((history) => history.descricao));
        } else {
          setHistory(null);
          setError("Nenhum histórico encontrado");
        }
      })
      .catch((error) => {
        console.error("Error fetching history:", error);
        setError("Erro ao buscar histórico");
      });
  }

  return (
    <div className="App">
      <h1>Histórico</h1>
      <label>
        ID da Tarefa:
        <input
          type="text"
          value={taskId}
          onChange={(e) => setTaskId(e.target.value)}
        />
      </label>
      <button onClick={getHistory}>Buscar histórico</button>
      {error ? (
        <p>{error}</p>
      ) : history ? (
        history
      ) : (
        "Nenhum histórico encontrado"
      )}
    </div>
  );
};

export default History;
