import { closestCorners, DndContext } from "@dnd-kit/core";
import React, { useState } from "react";
import To_do_demo from "../../Demo/To_do_demo";
import { arrayMove } from "@dnd-kit/sortable";
import ProgressDemo from "../../Demo/ProgressDemo";
const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", category: "to-do" },
    { id: 2, title: "Task 2", category: "to-do" },
    { id: 3, title: "Task 3", category: "to-do" },
    { id: 4, title: "Task 4", category: "progress" },
    { id: 5, title: "Task 5", category: "progress" },
    { id: 6, title: "Task 6", category: "progress" },
    { id: 7, title: "Task 7", category: "done" },
    { id: 8, title: "Task 8", category: "done" },
    { id: 9, title: "Task 9", category: "done" },
  ]);

  const getTaskPos = (id) => tasks.findIndex((task) => task.id===id);
  const newCategory = (id) => tasks.filter((task) => task.id===id).category;
  
  const handleDragEnd = ({active, over}) => {

    if (!over || active.id === over.id) return;
    setTasks((prevTasks) => {

      const oldIndex = prevTasks.findIndex((task) => task.id === active.id);
      const overContainer = prevTasks.find((task) => task.id === over.id)?.category || over.id

      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      const updatedTasks = arrayMove(tasks, originalPos, newPos).map((task, index) =>({
          ...task, 
          id:index + 1,
      }))
      return prevTasks.map((task) =>
        task.id === active.id ? { ...task, category: overContainer } : task, arrayMove(updatedTasks)
      );


    });
    return arrayMove(updatedTasks);
  };

  // const handleDragEnd = ({active , over}) => {
  //     if(active.id !== over.id){
  //       setTasks(tasks => {
  //         const originalPos = getTaskPos(active.id)
  //         const newPos = getTaskPos(over.id)
          
  //     const updatedTasks = arrayMove(tasks, originalPos, newPos).map((task, index) =>({
  //         ...task, 
  //         id:index + 1,
  //         category: task.id === active.id ? newCategory(over.id) : task.category
  //     }))
  //     return updatedTasks
  //       })

  //     }
  //     return tasks
  // }


  return (
    <div>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <div className="flex items-center gap-6">
        <To_do_demo id="to-do" tasks={tasks.filter((task) => task.category === "to-do")} />
        <ProgressDemo id="progress" tasks={tasks.filter((task) => task.category === "progress")} />
        </div>
      </DndContext>
    </div>
  );
};

export default TaskBoard;
