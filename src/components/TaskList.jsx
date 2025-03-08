import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import env from "dotenv"
import { CiStar } from "react-icons/ci";
import { FaCheckSquare } from "react-icons/fa";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { toggleCompletion, selectedTask, setWeather } from "../store/slices/taskSlice";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY; 

const TaskList = ({ tasks }) => {
  const dispatch = useDispatch();
  const [weatherData, setWeatherData] = useState({}); // Store weather data for tasks
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    tasks.forEach((task) => {
      if (task.isOutdoor && !weatherData[task.id]) {
        fetchWeather(task.location, task.id);
      }
    });
  }, [tasks]);


  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
  
      console.log("Weather API Response:", data); // ✅ Debugging
  
      if (data.main && data.main.temp !== undefined) {
        // console.log("Temperature:", data.main.temp);
        // setTemperature(data.main.temp); // Ensure setState is working
        setWeatherData((prevData) => ({
          ...prevData,
          [taskId]: {
            temp: data.main.temp,
            condition: data.weather[0].description, // Store weather condition
          },
        }));
      } else {
        console.error("Error: 'temp' is missing in API response.");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  

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
            {task.isOutdoor && weatherData[task.id] ? (
              <p>🌡 {weatherData[task.id].temp}°C | {weatherData[task.id].condition}</p>
            ) : (
              <p></p>
            )}

            <CiStar className="icon-large" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
