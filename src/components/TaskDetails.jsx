import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { closeTaskDetails, toggleCompletion, deleteTask } from "../store/slices/taskSlice"; // ✅ Import deleteTask
import "../App.css";
import { CiStar, CiBellOn, CiCalendar } from "react-icons/ci";
import { FaCheckSquare, FaTimes, FaTrash } from "react-icons/fa"; // ✅ Import Trash icon
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { BsRepeat } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const TaskDetails = ({ task }) => {
  const dispatch = useDispatch();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleCheckBox = (taskId) => {
    dispatch(toggleCompletion(taskId));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    dispatch(closeTaskDetails()); // Close the details panel after deleting
  };

  return (
    <div className="task-details-div res">     

      <div className="check">
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

      <div className="list-left">
        <div className="box">
          <FiPlus className="icon-large" />
        </div>
        <p>Add Step</p>
      </div>

      <div className="list-left">
        <div className="box">
          <CiBellOn className="icon-large" />
        </div>
        <p>Set Reminder</p>
      </div>

      <div className="list-left" onClick={() => setShowDatePicker(!showDatePicker)}>
        <div className="box">
          <CiCalendar className="icon-large" />
        </div>
        <p>Add Due Date</p>
      </div>

      {/* Show Date Picker if toggled */}
      {showDatePicker && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar />
        </LocalizationProvider>
      )}

      <div className="list-left">
        <div className="box">
          <BsRepeat className="icon-large" />
        </div>
        <p>Repeat</p>
      </div>
      <input type="text" placeholder="Add note" />
      <div className="action-btn">
      <button className="close-btn" onClick={() => dispatch(closeTaskDetails())}>
        <FaTimes className="icon-large" />
      </button>
      <div className="delete-task" onClick={handleDelete}>
        <FaTrash className="icon-large delete-icon" />
      </div>
      </div>
      
    </div>
  );
};

export default TaskDetails;
