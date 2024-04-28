import Link from "next/link";
import { Task } from "../types/Task";
import { FaFolderTree } from "react-icons/fa6";
import EditTaskButton from "./EditTaskButton";
import RemoveTaskButton from "./RemoveTaskButton";

interface Props {
  tasks: Task[];
  removeTask: (taskId: number) => void;
  editTask: (editedTask: Task) => void;
}

const TaskList = ({ tasks, removeTask, editTask }: Props) => {
  return (
    <div className="ml-10 mt-5">
      <h2 className="flex items-center">
        <FaFolderTree className="mr-2" />
        Your task folder
      </h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center space-x-2">
            <Link
              href={`/tasks/${task.name}?id=${task.id}`}
              className="underline hover:bg-slate-400 mr-3"
            >
              {task.name}
            </Link>
            <EditTaskButton taskId={task.id} editTask={editTask} />
            <RemoveTaskButton taskId={task.id} removeTask={removeTask} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
