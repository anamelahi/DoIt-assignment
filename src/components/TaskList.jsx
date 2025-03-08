import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "../App.css";
import { CiStar } from "react-icons/ci";
import { FaCheckSquare } from "react-icons/fa";

import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { toggleCompletion, selectedTask } from "../store/slices/taskSlice";

const TaskList = ({ tasks }) => {
  const dispatch = useDispatch();
  // const tasks = useSelector((state) => state.tasks);
  const [checkedTasks, setCheckedTasks] = useState({});

  // const handleCheckBox = (taskId) => {
  //   setCheckedTasks((prev) => ({
  //     ...prev,
  //     [taskId]: !prev[taskId], // Toggle checkbox
  //   }));
  // };
  const handleCheckBox = (taskId) => {
    dispatch(toggleCompletion(taskId)); // ✅ Move task to Completed section
  };

  const handleTaskClick = (task) => {
    dispatch(selectedTask(task)); // ✅ Select the task when clicked
  };

  return (
    <div className="task-list-div">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="check"
          onClick={() => handleTaskClick(task)}
        >
          <div className="list-left">
            <div
              className="box"
              onClick={(e) => {
                e.stopPropagation();
                handleCheckBox(task.id);
              }}
            >
              {task.completed ? <FaCheckSquare /> : <MdCheckBoxOutlineBlank />}
            </div>
            <p className={task.completed ? "task-done" : ""}>{task.text}</p>
          </div>
          <CiStar className="icon-large" />
        </div>
      ))}
      
    </div>
  );
};

export default TaskList;
