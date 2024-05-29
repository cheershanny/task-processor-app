"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AddStepForm from "./AddStepForm";
import StepList from "./StepList";
import { Step } from "@/app/types/Step";

interface Props {
  searchParams: { id: string };
  params: { slug: string };
}

const page = ({ searchParams: { id }, params: { slug } }: Props) => {
  const [steps, setSteps] = useState<Step[]>([]);
  useEffect(() => {
    fetch(`/api/steps/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSteps(data);
      });
  }, []);
  const addStep = (newStep: Step) => {
    setSteps((prevSteps) => [...prevSteps, newStep]);
  };
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <h1 className="text-center text-2xl">
        On Task: <span className="underline">{decodeURIComponent(slug)}</span>
      </h1>
      <StepList steps={steps} />
      <AddStepForm taskId={id} addStep={addStep}/>
    </div>
  );
};

export default page;
