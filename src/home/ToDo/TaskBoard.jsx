import { closestCorners, DndContext } from "@dnd-kit/core";
import React, { useState } from "react";
import To_do_demo from "../../Demo/To_do_demo";
import { arrayMove } from "@dnd-kit/sortable";
import ProgressDemo from "../../Demo/ProgressDemo";
import DoneDemo from "../../Demo/DoneDemo";
import TaskForm from "../../Dashboard/TaskForm";

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

  const handleDragEnd = ({ active, over }) => {
    if (!over || active.id === over.id) return;

    setTasks((prevTasks) => {
      const oldIndex = prevTasks.findIndex((task) => task.id === active.id);
      const newIndex = prevTasks.findIndex((task) => task.id === over.id);

      if (oldIndex === -1 || newIndex === -1) return prevTasks;

      const overCategory =
        prevTasks.find((task) => task.id === over.id)?.category || over.id;

      let updatedTasks = arrayMove(prevTasks, oldIndex, newIndex);

      updatedTasks = updatedTasks.map((task, index) => ({
        ...task,
        category: task.id === active.id ? overCategory : task.category,
        // id: index + 1,
      }));

      return updatedTasks;
    });
  };

  return (
    <div>
      <TaskForm></TaskForm>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <div className="flex items-center justify-between  gap-16 w-8/12 mx-auto">
          <h2 className="font-bold font-2xl">To-do</h2>
          <h2 className="font-bold font-2xl">Progress</h2>
          <h2 className="font-bold font-2xl">Done</h2>
        </div>
        <div className="flex items-center justify-center gap-16">
          <div className=" ">
            <To_do_demo
              tasks={tasks.filter((task) => task.category === "to-do")}
            />
          </div>
          <div>
            <ProgressDemo
              tasks={tasks.filter((task) => task.category === "progress")}
            />
          </div>

          <div>
            <DoneDemo
              tasks={tasks.filter((task) => task.category === "done")}
            ></DoneDemo>
          </div>
        </div>
      </DndContext>
    </div>
  );
};

export default TaskBoard;
