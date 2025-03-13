import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import Task_Demo from "./Task_Demo";

const To_do_demo = ({ tasks }) => {
  return (
  <>
    
    <div> 
     <div>
     <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks
          .filter((task) => task.category === "to-do")
          .map((task) => (
            <Task_Demo task={task} key={task.id} />
          ))}
      </SortableContext>
     </div>
    </div>
  </>
  );
};

export default To_do_demo;
