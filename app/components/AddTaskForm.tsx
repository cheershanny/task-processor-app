"use client";

import React, { useState, useEffect } from "react";


const AddTaskForm = () => {
  const [newTask, setNewTask] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: newTask }),
    });
    setNewTask("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          aria-label="Add your new repetitive task"
          placeholder="example: Build new web app"
          className="input input-bordered w-full max-w-xs ml-10"
          value={newTask}
          required
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-outline btn-sm ml-2">Add</button>
      </form>
     
    </div>
  );
};

export default AddTaskForm;
