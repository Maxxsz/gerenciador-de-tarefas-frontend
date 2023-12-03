import "./App.css";
import TasksByProject from "./components/TasksByProject";
import AllTasks from "./components/AllTasks";
import ProjectsByUser from "./components/ProjectsByUser";
import TasksByUser from "./components/TasksByUser";
import History from "./components/History";
import CreateUser from "./components/NewUser";
import UpdateTaskStatus from "./components/UpdateTaskStatus";
import DeleteUser from "./components/DeleteUser";
import CreateProject from "./components/NewProject";
import CreateTask from "./components/NewTask";
import UpdateProjectName from "./components/UpdateProjectName";
import DeleteProject from "./components/DeleteProject";

function App() {
  return (
    <div className="App">
      <AllTasks />
      <TasksByProject />
      <ProjectsByUser />
      <TasksByUser />
      <History />
      <CreateUser />
      <CreateProject />
      <CreateTask />
      <UpdateTaskStatus />
      <UpdateProjectName />
      <DeleteUser />
      <DeleteProject />
    </div>
  );
}

export default App;
