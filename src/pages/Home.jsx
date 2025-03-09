import React, {useState} from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { toggleCompletion } from "../store/slices/taskSlice";
import TaskDetails from "../components/TaskDetails";
const Home = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const activeTasks = useSelector((state) => state.tasks.activeTasks);
  const completedTasks = useSelector((state) => state.tasks.completedTasks);
  const selectedTask = useSelector((state) => state.tasks.selectedTask);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className={darkMode ? "dark-theme" : "light-theme"}>
      <Navbar toggleSidebar={toggleSidebar}/>
      <Sidebar isOpen={isSidebarOpen} />

      <div className="home">
        <div className={isSidebarOpen?"very-main mar":"very-main"}>
          <div className="main">
            {/* todo */}
            <div className="todo">
              <AddTask />
              <TaskList tasks={activeTasks} />
            </div>
            {/* completed */}
            <div className="completed">
              <p>Completed</p>
              <TaskList tasks={completedTasks} onToggleTask={(id) => dispatch(toggleCompletion(id))} />
             
            </div>
          </div>
          {selectedTask && <TaskDetails task={selectedTask} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
