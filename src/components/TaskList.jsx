import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchWeather } from "../store/slices/weatherSlice";
import { CiStar } from "react-icons/ci";
import { FaCheckSquare } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { toggleCompletion, selectedTask } from "../store/slices/taskSlice";

const TaskList = ({ tasks }) => {
  const dispatch = useDispatch();
  const { weatherData, loading, error } = useSelector((state) => state.weather);

  useEffect(() => {
    tasks.forEach((task) => {
      if (task.isOutdoor && !weatherData[task.location]) {
        dispatch(fetchWeather(task.location)); // Dispatch thunk
      }
    });
  }, [tasks, dispatch, weatherData]);

  const handleCheckBox = (taskId) => {
    dispatch(toggleCompletion(taskId));
  };

  const handleTaskClick = (task) => {
    dispatch(selectedTask(task));
  };

  return (
    <div className="task-list-div">
      {tasks.map((task) => (
        <div key={task.id} className="check" onClick={() => handleTaskClick(task)}>
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

          <div>
            {task.isOutdoor && weatherData[task.location] ? (
              <p>🌡 {weatherData[task.location].temp}°C | {weatherData[task.location].condition}</p>
            ) : loading ? (
              <p>Fetching Weather...</p>
            ) : (
              <p>{error ? `Error: ${error}` : ""}</p>
            )}
            <CiStar className="icon-large" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
