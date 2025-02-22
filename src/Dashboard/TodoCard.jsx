import { useState } from "react";

const TodoCard = () => {
  // Define state inside the functional component
  const [toDoTasks, setToDoTasks] = useState([
    { id: 1, title: "Wash the dishes", category:"to-do", description: "Clean the sink", date: "2025-02-21", time: "08:30 AM" },
    { id: 2, title: "Get a passport",category:"to-do", description: "Renew passport", date: "2025-02-22", time: "10:00 AM" },
  ]);

  return (
    <div className="bg-white p-4 w-80 rounded-lg shadow-lg border">
      {/* Header */}
      <div className="flex justify-between items-center">
      <h3 className="text-lg font-bold">To Do</h3>
      </div>

      {/* Task List */}
      <div className="mt-2 space-y-2">
        {toDoTasks.map((task) => (
          <input
            key={task.id}
            type="text"
            value={task.title}
            className="w-full border rounded-md p-2 text-gray-700 bg-gray-100"
            readOnly
          />
        ))}
      </div>
    </div>
  );
};

export default TodoCard;

