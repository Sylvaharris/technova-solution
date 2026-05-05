import React from "react";

const FilterBar = ({ filter, setFilter, tasksLeft }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-xl ${
            filter === "all" ? "bg-white shadow" : "text-gray-500"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setFilter("active")}
          className={`px-4 py-2 rounded-xl ${
            filter === "active" ? "bg-white shadow" : "text-gray-500"
          }`}
        >
          Active
        </button>

        <button
          onClick={() => setFilter("completed")}
          className={`px-4 py-2 rounded-xl ${
            filter === "completed" ? "bg-white shadow" : "text-gray-500"
          }`}
        >
          Completed
        </button>
      </div>

      <p className="text-gray-500">{tasksLeft} task left</p>
    </div>
  );
};

export default FilterBar;
