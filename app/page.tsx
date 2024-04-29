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
  const removeTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  const editTask = (editedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editedTask.id ? editedTask : task
      )
    );
  }
  return (
    <div>
      <h1 className="m-5 text-4xl">
        Break task down & Stay on{" "}
        <strong className="font-bold underline">step</strong>
      </h1>
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} removeTask={removeTask} editTask={editTask} />
    </div>
  );
}
