"use client";
import Link from "next/link";
import React, { useState } from "react";

const AddTaskForm = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [taskList, setTaskList] = useState<string[]>([]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
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
      <ul className="ml-10 mt-5">
        <h2>Your task folder</h2>
        {taskList.map((task, index) => (
          <li key={index}>
            {index + 1}.{" "}
            <Link
              href={`/${task}`}
              className="underline decoration-primary hover:bg-base-200"
            >
              {task}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTaskForm;
