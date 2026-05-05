"use client";

import React, { useState, useEffect } from "react";
import Header from "./Header";
import TaskForm from "./TaskForm";
import FilterBar from "./FilterBar";
import TaskList from "./TaskList";

const TodoApp = () => {
  // =========================
  // STATES
  // =========================

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [tasks, setTasks] = useState([]);

  const [filter, setFilter] = useState("all");

  // =========================
  // LOAD FROM LOCAL STORAGE
  // =========================

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  /*
    Runs once when page opens.

    localStorage only stores string.

    So we convert string back to array:
    JSON.parse(savedTasks)
  */

  // =========================
  // SAVE TO LOCAL STORAGE
  // =========================

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /*
    Anytime tasks changes:
    Add
    Delete
    Complete

    Save again automatically.
  */

  // =========================
  // ADD TASK
  // =========================

  const addTask = () => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now(),
      title: title,
      description: description,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setDescription("");
  };

  // =========================
  // DELETE TASK
  // =========================

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  };

  // =========================
  // COMPLETE TASK
  // =========================

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  // =========================
  // FILTER TASKS
  // =========================

  let filteredTasks = tasks;

  if (filter === "active") {
    filteredTasks = tasks.filter((task) => task.completed === false);
  }

  if (filter === "completed") {
    filteredTasks = tasks.filter((task) => task.completed === true);
  }

  // count active tasks
  const tasksLeft = tasks.filter((task) => task.completed === false).length;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl">
        <Header />

        <TaskForm
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          addTask={addTask}
        />

        <FilterBar
          filter={filter}
          setFilter={setFilter}
          tasksLeft={tasksLeft}
        />

        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
};

export default TodoApp;
