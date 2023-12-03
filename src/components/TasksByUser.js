import { useState } from "react";

function TasksByUser() {
  const [tasks, setTasks] = useState([]);
  const [showTable, setShowTable] = useState(false);

  function getAllTasksByUser() {
    let userId = prompt("Insira o ID do Projeto:");
    fetch(`http://localhost:3001/getAllTasksByUser/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        const tasksData = JSON.parse(data);
        if (tasksData.length > 0) {
          setTasks(tasksData.map((task) => task));
          setShowTable(true);
        } else {
          setTasks("Nenhuma tarefa encontrada");
          setShowTable(false);
        }
      });
  }
  return (
    <div className="App">
      <h1>Buscar tarefas pelo ID do Usuário</h1>
      {showTable && (
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Usuário</th>
              <th>Projeto</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.tarefa_nome}</td>
                <td>{task.projeto_nome}</td>
                <td>{task.usuario_nome}</td>
                <td>{task.descricao}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {tasks === "Nenhuma tarefa encontrada" && tasks}
      <br />
      <button onClick={getAllTasksByUser}>Exibir tarefas</button>
      <br />
    </div>
  );
}
export default TasksByUser;
