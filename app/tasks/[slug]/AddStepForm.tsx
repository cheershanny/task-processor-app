"use client";
import { useForm, Controller } from "react-hook-form";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Step } from "../../types/Step";

interface Props {
  taskId: string;
  addStep: (newStep: Step) => void;
}

const AddStep = ({ taskId, addStep }: Props) => {
  const { register, handleSubmit, control, reset } = useForm<Step>();
  const [errorMessage, setErrorMessage] = useState<string>("");
  

  const onSubmit = async (formData: Step) => {
    const response = await fetch("/api/steps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) setErrorMessage("Failed to add step");
    const newStep = await response.json();
    addStep(newStep);
    reset();
  };

  return (
    <div className="max-w-xl mx-auto">
      {errorMessage && (
        <div role="alert" className="alert">
          <AiOutlineInfoCircle />
          <span>{errorMessage}</span>
        </div>
      )}
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="hidden"
            aria-label="task ID"
            value={taskId}
            {...register("taskId", { valueAsNumber: true })}
          />
          <div className="grid grid-cols-4 gap-3 mb-3">
            <input
              type="text"
              aria-label="Add step"
              placeholder="Add step"
              className="input input-bordered col-span-3"
              required
              {...register("name")}
            />
            <input
              type="number"
              placeholder="Duration"
              className="input input-bordered col-span-1"
              {...register("duration", { valueAsNumber: true })}
            />
          </div>

          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <SimpleMDE {...field} value={field.value || ""} />
            )}
          />

          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddStep;
