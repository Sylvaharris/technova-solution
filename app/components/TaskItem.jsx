import React from "react";

const TaskItem = ({ task, deleteTask, toggleComplete }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-5 flex justify-between items-start">
      <div className="flex gap-4">
        {/* COMPLETE BOX */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
          className="mt-1 w-5 h-5"
        />

        <div>
          <h3
            className={`font-bold text-xl ${
              task.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {task.title}
          </h3>

          {task.description && (
            <p className="text-gray-500 mt-1">{task.description}</p>
          )}
        </div>
      </div>

      {/* DELETE BUTTON */}
      <button
        onClick={() => deleteTask(task.id)}
        className="text-red-500 font-semibold"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
