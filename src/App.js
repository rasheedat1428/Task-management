import AddTask from "./components/AddTask";
import Header from "./components/Header";
import { TaskProvider } from "./context/tasks";
import Tasks from "./components/Tasks";

function App() {
  return (
   
   <TaskProvider>
    <div className="container">
    <Header />
     <AddTask />
      <Tasks />
   
    </div>
  </TaskProvider> 
  );
}

export default App;
