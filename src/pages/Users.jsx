import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

const tagOptions = ["Sports", "Music", "Tech", "Travel", "Food"];

function Tag({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full border text-sm m-1 transition
            ${active ? "bg-[#3a388b] text-white border-[#3a388b]" : "bg-white"}`}
    >
      {children}
    </button>
  );
}

function Switch({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`w-12 h-6 flex items-center rounded-full p-1 transition
            ${checked ? "bg-[#3a388b]" : "bg-gray-300"}`}
    >
      <div
        className={`w-4 h-4 bg-white rounded-full transition
                ${checked ? "ml-auto" : "ml-0"}`}
      />
    </button>
  );
}

function Slider({ value, onChange }) {
  return (
    <input
      type="range"
      min="0"
      max="100"
      value={value[1]}
      onChange={(e) => onChange([value[0], Number(e.target.value)])}
      className="w-full"
    />
  );
}


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

  const [submitted, setSubmitted] = useState(false);

  let [isLoading, setIsLoading] = useState(false)

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    tags: [],
    range: [25, 25],
    notifications: false,
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    if (name === "name" && !value.trim()) error = "Name is required";

    if (name === "email") {
      if (!value) error = "Email is required";
      else if (!/^\S+@\S+\.\S+$/.test(value)) error = "Enter valid email";
    }

    if (name === "phone") {
      if (!value) error = "Phone is required";
      else if (!/^\d{10,15}$/.test(value)) error = "Invalid phone";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    return !error;
  };

  const isStepValid = () => {
    if (current === 0) {
      return (
        form.name &&
        form.email &&
        form.phone &&
        !errors.name &&
        !errors.email &&
        !errors.phone
      );
    }

    if (current === 1) {
      return form.tags.length > 0;
    }

    return true;
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const next = () => {
    setCurrent((p) => p + 1);
  };

  const prev = () => setCurrent((p) => p - 1);

  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true);
    }, 1000)
  };

  if (submitted) {
    return (
      <div className="text-center mt-20">
        <h2>✅ Success</h2>
        <p>Onboarding complete</p>
      </div>
    );
  }

  return (
    <div className="max-w-[500px] mx-auto mt-10">
      <Stepper current={current} />

      {current === 0 && (
        <>
           <Input
            placeholder="Name"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            onBlur={(e) => validateField("name", e.target.value)}
            error={errors.name}
          />

          <Input
            placeholder="Email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={(e) => validateField("email", e.target.value)}
            error={errors.email}
          />

          <Input
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            onBlur={(e) => validateField("phone", e.target.value)}
            error={errors.phone}
          />
        </>
      )}

      {current === 1 && (
        <>
          <p className="mb-2">Select Interests:</p>

          {tagOptions.map((tag) => (
            <Tag
              key={tag}
              active={form.tags.includes(tag)}
              onClick={() => {
                const updated = form.tags.includes(tag)
                  ? form.tags.filter((t) => t !== tag)
                  : [...form.tags, tag];

                handleChange("tags", updated);
              }}
            >
              {tag}
            </Tag>
          ))}

          {form.tags.length === 0 && (
            <p className="text-red-500 text-sm mt-2">
              Select at least one
            </p>
          )}

          <div className="mt-4">
            <p className="font-medium mb-2">Age</p>

            <div className="flex items-center justify-between text-sm text-gray-500 mb-1">
              <span>{form.range[1]} years</span>
            </div>

            <Slider
              value={form.range}
              onChange={(val) => handleChange("range", val)}
            />

            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>Min 0</span>
              <span>Max 100</span>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <p>Notifications</p>
            <Switch
              checked={form.notifications}
              onChange={(val) =>
                handleChange("notifications", val)
              }
            />
          </div>
        </>
      )}

      {current === 2 && (
        <div className="space-y-2">
          <p><b>Name:</b> {form.name}</p>
          <p><b>Email:</b> {form.email}</p>
          <p><b>Phone:</b> {form.phone}</p>
          <p><b>Tags:</b> {form.tags.join(", ")}</p>
          <p><b>Range:</b> {form.range.join(" - ")}</p>
          <p><b>Notifications:</b> {form.notifications ? "Yes" : "No"}</p>
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
            disabled={!isStepValid()}
          >
            Next
          </Button>
        )}

        {current === 2 && (
          <Button onClick={handleSubmit} loading={isLoading}>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
}