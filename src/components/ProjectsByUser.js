import { useState } from "react";

const ProjectsByUser = function ProjectsByUser() {
  const [projects, setProjects] = useState(false);
  const [showTable, setShowTable] = useState(false);

  function getAllProjectsByUser() {
    let userId = prompt("Insira o ID do Usuario:");
    fetch(`http://localhost:3001/getAllProjectsByUser/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        const projectsData = JSON.parse(data);
        if (projectsData.length > 0) {
          setProjects(projectsData.map((project) => project));
          setShowTable(true);
        } else {
          setProjects("Nenhum projeto encontrado");
          setShowTable(false);
        }
      });
  }
  return (
    <div className="App">
      <h1>Buscar projetos pelo ID do usuário</h1>
      {showTable && (
        <table>
          <thead>
            <tr>
              <th>Projeto</th>
              <th>Usuário</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr key={index}>
                <td>{project.projeto_nome}</td>
                <td>{project.usuario_nome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {projects === "Nenhum projeto encontrado" && projects}
      <br />
      <button onClick={getAllProjectsByUser}>Exibir projetos</button>
    </div>
  );
};

export default ProjectsByUser;
