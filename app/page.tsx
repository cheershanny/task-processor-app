"use client";
import { useEffect, useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { Task } from "./types/Task";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);
  const addTask = (newTask: Task) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  
  return (
    <main>
      <h1 className="m-5 text-4xl">
        Break task down & Stay on{" "}
        <strong className="font-bold underline">step</strong>
      </h1>
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </main>
  );
}
