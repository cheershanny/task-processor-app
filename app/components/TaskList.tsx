"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

interface Task {
  id: number;
  name: string;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);

  return (
    <div className="ml-10 mt-5">
      <h2>Your task folder</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.id} {" ."}
            <Link
              href={`${task.name}`}
              className="underline hover:bg-slate-400"
            >
              {task.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
