"use client";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Step } from "../../types/Step";

interface Props {
  taskId: string;
}

const AddStep = ({ taskId }: Props) => {
  const { register, handleSubmit } = useForm<Step>();

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
    <div className="max-w-xl">
      {errorMessage && (
        <div role="alert" className="alert">
          <AiOutlineInfoCircle />
          <span>{errorMessage}</span>
        </div>
      )}
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Add step"
          className="input w-full max-w-xs"
          {...register("name")}
        />
        <input
          type="number"
          placeholder="Duration"
          className="input w-full max-w-xs"
          {...register("duration", { valueAsNumber: true })}
        />
        <input
          type="hidden"
          value={taskId}
          {...register("taskId", { valueAsNumber: true })}
        />
        <textarea
          className="textarea textarea-bordered"
          placeholder="Add detail"
          {...register("description")}
        ></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default AddStep;
