"use client";
import { useForm, Controller } from "react-hook-form";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Step } from "../../types/Step";

interface Props {
  taskId: string;
}

const AddStep = ({ taskId }: Props) => {
  const { register, handleSubmit, control } = useForm<Step>();

  const [errorMessage, setErrorMessage] = useState<string>("");
  const onSubmit = async (formData: Step) => {
    console.log(formData);
    await fetch("/api/steps", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
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
            value={taskId}
            {...register("taskId", { valueAsNumber: true })}
          />
          <div className="grid grid-cols-4 gap-3 mb-3">
            <input
              type="text"
              placeholder="Add step"
              className="input input-bordered col-span-3"
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
