"use client";

import React, { useState, useEffect } from "react";
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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          aria-label="Add your new repetitive task"
          placeholder="example: Build new web app"
          className="input input-bordered w-full max-w-xs ml-10"
          value={taskInput}
          required
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button className="btn btn-outline btn-sm ml-2">Add</button>
      </form>
    </div>
  );
};

export default AddTaskForm;
