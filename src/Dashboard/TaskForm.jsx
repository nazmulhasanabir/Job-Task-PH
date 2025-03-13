import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const TaskForm = ({ onAddTask }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const onSubmit = (data) => {
    const newTask = {
      title: data.title,
      description: data.description,
      category: data.category,
      time: currentTime.toLocaleString(),
    };

    fetch("http://localhost:5000/task", {
      method:"POST",
      headers:{
        "content-type": "application/json",
      },
      body:JSON.stringify(newTask)
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.insertedId){
        Swal.fire({
          icon:"success",
          title:"Task Added",
          text:"Your Task Added SuccessFully"
        })
      }
    })

    // onAddTask(newTask);
    reset();



  };

  return (
    <div>
      <button
        className="btn btn-ghost"
        onClick={() => document.getElementById("my_modal_1").showModal()}
      >
        Add Task
      </button>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-4 rounded-lg space-y-4 w-96"
          >
            <h2 className="text-xl font-semibold">Add Task</h2>

            {/* Title Input */}
            <input
              type="text"
              placeholder="Task Title (max 50 chars)"
              className="w-full p-2 rounded"
              {...register("title", {
                required: "Title is required",
                maxLength: 50,
              })}
            />
            {errors.title && (
              <p className="text-red-400">{errors.title.message}</p>
            )}

            {/* Description Input */}
            <textarea
              placeholder="Task Description (max 200 chars)"
              className="w-full p-2 rounded"
              {...register("description", { maxLength: 200 })}
            ></textarea>
            {errors.description && (
              <p className="text-red-400">Max 200 characters allowed</p>
            )}

            {/* Category Selection */}
            <select className="w-full p-2 rounded" {...register("category")}>
              <option value="To-Do">To-Do</option>
            </select>

      
            <p className="text-sm text-gray-500">
              📅 <strong>Current Time:</strong> {currentTime.toLocaleString()}
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-blue-500 text-white"
            >
              Add Task
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default TaskForm;
