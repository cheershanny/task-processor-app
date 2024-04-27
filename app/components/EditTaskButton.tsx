import React from "react";
import { CiEdit } from "react-icons/ci";
import { Task } from "../types/Task";

interface Props {
  taskId: number;
  editTask: (editedTask: Task) => void;
}

const EditTaskButton = ({ taskId, editTask }: Props) => {
  const handleClick = async () => {
    const editedTask = prompt("Edit task:", "");
   
    const response = await fetch("/api/tasks", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: taskId, name: editedTask }),
    }); 
    if (response.ok) {
      const editedTask = await response.json();
      editTask(editedTask);
    } else {
      alert("Failed to edit task!");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="hover:bg-gray-200 active:bg-gray-300"
    >
      <CiEdit />
    </button>

    
  );
};

export default EditTaskButton;
