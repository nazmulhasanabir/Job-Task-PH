import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GiCancel } from "react-icons/gi";
import { MdEditDocument } from "react-icons/md";
const Progress = ({ task }) => {
  // Define state for "In-Progress" tasks
  // const [progressTasks, setProgressTasks] = useState([
  //   { id: 1, title: "Write report", description: "Finish monthly report", category:"progress", date: "2025-02-21", time: "11:00 AM" },
  //   { id: 2, title: "Develop feature", description: "Work on UI improvements", category:"progress", date: "2025-02-22", time: "02:30 PM" },
  // ]);
  const { id, time, date, description, category, title } = task;
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className=""
    >
      <div className="bg-white p-4 w-80 rounded-lg shadow-lg border flex items-center gap-2">
        <input
          type="text"
          value={title}
          className="w-full border rounded-md p-2 text-gray-700 bg-gray-100"
          readOnly
        />
        <MdEditDocument className="w-8 h-8" />
        <GiCancel className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Progress;
