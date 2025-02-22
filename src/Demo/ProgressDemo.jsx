import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Progress from "../Dashboard/Progress";

const ProgressDemo = ({ tasks }) => {
  return (
    <div>
       <h2 className="font-bold font-2xl">Progress</h2>
      <SortableContext
        items={tasks.map((task) => task.id)}
        strategy={verticalListSortingStrategy}
      >
        {tasks
          .filter((task) => task.category === "progress")
          .map((task) => (
            <Progress key={task.id} task={task}></Progress>
          ))}
      </SortableContext>
    </div>
  );
};

export default ProgressDemo;
