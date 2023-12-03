import { useState } from "react";

const AllTasks = function AllTasks() {
  const [tasks, setTasks] = useState([]);
  const [showTable, setShowTable] = useState(false);

  function getAllTasks() {
    fetch("http://localhost:3001/getTasks/", {
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
      <h1>Todas as tarefas</h1>
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
                <td>{task.usuario_nome}</td>
                <td>{task.projeto_nome}</td>
                <td>{task.status_nome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <br />
      <button onClick={getAllTasks}>Exibir todas as tarefas</button>
    </div>
  );
};

export default AllTasks;
