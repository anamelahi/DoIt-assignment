import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useSelector } from "react-redux";
import "../App.css"

const COLORS = ["#4CAF50", "#1B5E20"]; 

const TaskChart = () => {
  const activeTasks = useSelector((state) => state.tasks?.activeTasks || []);
  const completedTasks = useSelector((state) => state.tasks?.completedTasks || []);

const totalTasks = activeTasks.length + completedTasks.length;

  const data = [
    { name: "Pending", value: activeTasks.length },
    { name: "Done", value: completedTasks.length },
  ];

  return (
    <div className="chart-container">
      <h3>Today Tasks</h3>
      <h2>{totalTasks}</h2>

      <PieChart className="pie" width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default TaskChart;
