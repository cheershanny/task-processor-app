import Link from "next/link";
import React from "react";
import AddStepForm from "./AddStepForm";

interface Props {
  searchParams: { id: string };
  params: { slug: string };
}

const page = ({ searchParams: { id }, params: { slug } }: Props) => {
  return (
    <div>
      <Link href={"/"}>Home</Link>
      <h1>On Task {decodeURIComponent(slug)}, {id}</h1>
      <AddStepForm taskId={id} />
    </div>
  );
};

export default page;
