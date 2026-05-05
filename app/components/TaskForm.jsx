import React from "react";

const TaskForm = ({
  title,
  setTitle,
  description,
  setDescription,
  addTask,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 mb-8">
      <input
        type="text"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded-xl px-4 py-3 mb-4 outline-none text-gray-800 placeholder:text-gray-500"
      />

      <textarea
        placeholder="Add a description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border rounded-xl px-4 py-3 h-32 outline-none resize-none text-gray-800 placeholder:text-gray-500"
      ></textarea>

      <div className="flex justify-end mt-4">
        <button
          onClick={addTask}
          className="bg-purple-400 hover:bg-purple-500 text-white px-6 py-3 rounded-xl"
        >
          + Add task
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
