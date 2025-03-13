import {
    SortableContext,
    verticalListSortingStrategy,
  } from "@dnd-kit/sortable";
import Done from "../Dashboard/Done";
const DoneDemo = ({tasks}) => {
    return (
        <div>
     
      <SortableContext
        items={tasks.map((task) => task.id)}
        strategy={verticalListSortingStrategy}
      >
        {tasks
          .filter((task) => task.category === "done")
          .map((task) => (
            <Done key={task.id} task={task}></Done>
          ))}
      </SortableContext>
    </div>
    );
};

export default DoneDemo;