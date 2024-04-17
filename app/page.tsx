import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

export default function Home() {
  return (
    <main>
      <h1 className="m-5 text-4xl">
        Break task down & Stay on{" "}
        <strong className="font-bold underline">step</strong>
      </h1>
      <AddTaskForm />
      <TaskList />
    </main>
  );
}
