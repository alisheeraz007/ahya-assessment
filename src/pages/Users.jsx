import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";


function Stepper({ current }) {
  const steps = ["Personal", "Preferences", "Review"];

  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, i) => (
        <div key={i} className="flex-1 text-center">
          <div
            className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-sm
                        ${i <= current ? "bg-[#3a388b] text-white" : "bg-gray-200"}`}
          >
            {i + 1}
          </div>
          <p className="text-xs mt-1">{step}</p>
        </div>
      ))}
    </div>
  );
}

export default function Users() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((p) => p + 1);
  };

  const prev = () => setCurrent((p) => p - 1);

  return (
    <div className="max-w-[500px] mx-auto mt-10">
      <Stepper current={current} />

      {current === 0 && (
        <>
            <Input
                placeholder="Name"
            />

            <Input
                placeholder="Email"
            />

            <Input
                placeholder="Phone"
            />
        </>
      )}

      {current === 1 && (
        <>
         Step 2: Preferences
        </>
      )}

      {current === 2 && (
        <div className="space-y-2">
          step 3: Review
        </div>
      )}

      <div className="mt-6 flex gap-2">
        {current > 0 && (
          <Button variant="secondary" onClick={prev}>
            Back
          </Button>
        )}

        {current < 2 && (
          <Button
            onClick={next}
          >
            Next
          </Button>
        )}

        {current === 2 && (
          <Button>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
}