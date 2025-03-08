import { useState } from "react";
import {useDispatch} from "react-redux"
import { addTask, setWeather } from "../store/slices/taskSlice";
import { CiBellOn, CiCalendar } from "react-icons/ci";
import { BsRepeat } from "react-icons/bs";
import { getWeatherInfo } from "../utils/WeatherDetails";

import "../App.css"

const AddTask = ({ onAddTask }) => {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleAddTask = async()=>{
        if (!task.trim()) return; // Avoid adding empty tasks

        const isOutdoor = task.toLowerCase().includes("outdoor"); // Check if task is outdoor
        dispatch(addTask({ text: task, isOutdoor }));
    
        if (isOutdoor) {
            const weatherData = await getWeatherInfo();
            dispatch(setWeather({ id: crypto.randomUUID(), weather: weatherData }));
        }
    
        setTask(""); 
    }
    return (
        <div className="add-task-container">
            {/* <p>Add A Task</p> */}
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Add A Task"
                className="task-input"
            />
            <div className="task-options">
                <div className="task-icons">
                <CiBellOn className="icon-large" />
                <BsRepeat className="icon-large" />
                <CiCalendar className="icon-large" />
                </div>
                
                <button className="add-task-btn" onClick={handleAddTask}>
                    ADD TASK
                </button>
            </div>
        </div>
    );
};

export default AddTask;
