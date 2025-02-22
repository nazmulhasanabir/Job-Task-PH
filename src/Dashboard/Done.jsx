import { useState } from "react";

const Done = () => {
  // Define state for "Done" tasks
  const [doneTasks, setDoneTasks] = useState([
    { id: 1, title: "Submit Assignment", description: "Completed Math Assignment",category:"done", date: "2025-02-19", time: "05:00 PM" },
    { id: 2, title: "Book Tickets", description: "Flight tickets confirmed",category:"done", date: "2025-02-20", time: "09:15 AM" },
  ]);

  return (
    <div className="bg-white p-4 w-80 rounded-lg shadow-lg border">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold">Done</h3>
      </div>

      {/* Task List */}
      <div className="mt-2 space-y-2">
        {doneTasks.map((task) => (
          <input
            key={task.id}
            type="text"
            value={task.title} // Dynamically display task title
            className="w-full border rounded-md p-2 text-gray-700 bg-gray-100"
            readOnly
          />
        ))}
      </div>

    </div>
  );
};

export default Done;
