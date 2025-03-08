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



const settings = {
  value: 75, // Adjust this value as needed
  startAngle: -90,
  endAngle: 90,
};

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
        <div className="head">
          <p>Today Tasks</p>
          <p>11</p>
        </div>

        <div style={{ width: 200, height: 200 }}>
        <Gauge
          {...settings}
          cornerRadius="50%"
          sx={(theme) => ({
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: 40,
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: "#52b202",
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              fill: theme.palette.text.disabled,
            },
          })}
        />
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
