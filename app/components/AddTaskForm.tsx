"use client";

import React, { useState } from "react";
import { Task } from "../types/Task";

interface Props {
  addTask: (newTask: Task) => void;
}

const AddTaskForm = ({ addTask }: Props) => {
  const [taskInput, setTaskInput] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: taskInput }),
    });
    const newTask = await response.json();
    addTask(newTask);
    setTaskInput("");
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center justify-center sm:justify-start"
      >
        <input
          type="text"
          aria-label="Add your new repetitive task"
          placeholder="example: Build new web app"
          className="input input-bordered w-full max-w-xs sm:mb-0 md:ml-10 mb-4"
          value={taskInput}
          required
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button className="btn btn-outline ml-2">Add</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
