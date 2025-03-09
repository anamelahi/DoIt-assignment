import React from "react";
import MenuList from "./MenuList";
import { CiMap } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { HiOutlineClipboardList } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa6";
import { MdAssignmentInd } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import profile from "/profile.png";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import TaskChart from "./TaskChart";


const Sidebar = () => {

  return (
    <div className="sideBar-div">
      <div className="profile-section">
        <img src={profile} alt="" />
        <p>Hello User</p>
      </div>

      <div className="section1">
        <MenuList icons={<HiOutlineClipboardList className="icon-large" />} text="All Tasks" />
        <MenuList icons={<CiCalendar className="icon-large" />} text="Today" />
        <MenuList icons={<FaRegStar className="icon-large"/>} text="Important" />
        <MenuList icons={<CiMap className="icon-large"/>} text="Planned" />
        <MenuList icons={<MdAssignmentInd className="icon-large"/>} text="Assigned to me" />
      </div>

      <div className="section2">
          <FaPlus />Add Task
      </div>

      <div className="section3">
        <TaskChart />
      </div>
    </div>
  );
};

export default Sidebar;
