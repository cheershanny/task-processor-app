import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";

type Props = {
  taskId: number;
  removeTask: (taskId: number) => void;
};

const RemoveTaskButton = ({ taskId, removeTask }: Props) => {
  const handleClick = async () => {
    const response = await fetch("/api/tasks", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: taskId }),
    });
    if (response.ok) {
      removeTask(taskId);
    } else {
      alert("Failed to remove task!");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="hover:bg-gray-200 active:bg-gray-300"
    >
      <AiTwotoneDelete />
    </button>
  );
};

export default RemoveTaskButton;
