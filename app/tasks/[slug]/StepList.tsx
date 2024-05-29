import { Step } from "@/app/types/Step";

interface Props {
  steps: Step[];
}

const StepList = ({ steps }: Props) => {
  return (
    <div className="ml-10 mt-5">
      <ul>
        {steps.map((step, index) => (
          <li key={step.id} className="flex items-center space-x-2">
            Step {index + 1}. {step.name}
            {/* Edit & Remove Step Components */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StepList;
