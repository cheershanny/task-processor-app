import Link from "next/link";
import { Task } from "../types/Task";

interface Props {
  tasks: Task[];
}

const TaskList = ({ tasks }: Props) => {
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
