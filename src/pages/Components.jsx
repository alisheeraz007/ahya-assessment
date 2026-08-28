import React, { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Modal from "../components/Modal";
import { ToastProvider, useToast } from "../components/ToastContext";

const ModalMain = ({modalOpen, setModalOpen, loading, handleSubmit, form, errors, setForm})=>{
    return(
        <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Create User"
        footer={
          <>
            <Button onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              loading={loading}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </>
        }
      >
        <Input
          label="Name"
          placeholder="Enter name"
          value={form.name2}
          error={errors.name2}
          onChange={(e) =>
            setForm({ ...form, name2: e.target.value })
          }
        />

        <Input
          label="Email"
          placeholder="Enter email"
          value={form.email2}
          error={errors.email2}
          onChange={(e) =>
            setForm({ ...form, email2: e.target.value })
          }
        />
      </Modal>
    )
}

function Demo() {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name1: "",
    email1: "",
    number: "",
    date: "",
    file: "",
    name2: "",
    email2: "",
  });

  const [errors, setErrors] = useState({});

  const { addToast } = useToast();

  const validate = () => {
    let newErrors = {};

    if (!form.name2) newErrors.name2 = "Name is required";
    if (!form.email2) newErrors.email2 = "Email is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setModalOpen(false);
      addToast("User saved successfully", "success");
    }, 1500);
  };

  return (
    <div style={{ padding: 40 }}>

      <div>

      <h2 className="text-[24px] mb-[20px] font-bold">Inputs</h2>

      <Input
        type="text"
        label="Text Input"
        placeholder="Enter name"
        value={form.name1}
        onChange={(e) =>
          setForm({ ...form, name1: e.target.value })
        }
      />

      <Input
        type="email"
        label="Email Input"
        placeholder="Enter email"
        value={form.email1}
        onChange={(e) =>
          setForm({ ...form, email1: e.target.value })
        }
      />

      <Input
        type="date"
        label="Date Input"
        placeholder="Pick a date"
        value={form.date}
        onChange={(e) =>
          setForm({ ...form, date: e.target.value })
        }
      />

      <Input
        type="number"
        label="Number Input"
        placeholder="Enter number"
        value={form.number}
        onChange={(e) =>
          setForm({ ...form, number: e.target.value })
        }
      />

      <Input
        type="file"
        label="File Input"
        placeholder="Add a file"
        value={form.file}
        onChange={(e) =>
          setForm({ ...form, file: e.target.value })
        }
      />

      </div>

      <div className="mt-[40px]">
        <h2 className="text-[24px] mb-[20px] font-bold">Modal</h2>

        <Button variant="primary" onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>

      </div>

      <div className="mt-[40px] flex gap-[10px] flex-wrap">
        <h2 className="text-[24px] mb-[20px] font-bold w-full">Toasts</h2>
        <Button
          variant="primary"
          onClick={() => addToast("Success message", "success")}
        >
          Success Toast
        </Button>

        <Button
          variant="secondary"
          onClick={() => addToast("Info message", "info")}
        >
          Info Toast
        </Button>

        <Button
          variant="danger"
          onClick={() => addToast("Something went wrong", "error")}
        >
          Error Toast
        </Button>

        <Button
          variant="warning"
          onClick={() => addToast("Warning Toast", "warning")}
        >
          Warning Toast
        </Button>
      </div>

      <div className="mt-[40px]">
        <h2 className="text-[24px] mb-[20px] font-bold w-full">Buttons</h2>
      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <Button
          variant="primary"
          size="sm"
        >
          SM Primary
        </Button>

        <Button
          variant="primary"
          size="md"
        >
          MD Primary
        </Button>

        <Button
          variant="primary"
          size="lg"
        >
          LG Primary
        </Button>

        <Button
          variant="primary"
        >
          Default Primary
        </Button>
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <Button
          variant="secondary"
          size="sm"
        >
          SM Secondary
        </Button>

        <Button
          variant="secondary"
          size="md"
        >
          MD Secondary
        </Button>

        <Button
          variant="secondary"
          size="lg"
        >
          LG Secondary
        </Button>

        <Button
          variant="secondary"
        >
          Default Secondary
        </Button>
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <Button
          variant="danger"
          size="sm"
        >
          SM Danger
        </Button>

        <Button
          variant="danger"
          size="md"
        >
          MD Danger
        </Button>

        <Button
          variant="danger"
          size="lg"
        >
          LG Danger
        </Button>

        <Button
          variant="danger"
        >
          Default Danger
        </Button>
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <Button
          variant="outline"
          size="sm"
        >
          SM Outline
        </Button>

        <Button
          variant="outline"
          size="md"
        >
          MD Outline
        </Button>

        <Button
          variant="outline"
          size="lg"
        >
          LG Outline
        </Button>

        <Button
          variant="outline"
        >
          Default Outline
        </Button>
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <Button
          variant="warning"
          size="sm"
        >
          SM Warning
        </Button>

        <Button
          variant="warning"
          size="md"
        >
          MD Warning
        </Button>

        <Button
          variant="warning"
          size="lg"
        >
          LG Warning
        </Button>

        <Button
          variant="warning"
        >
          Default Warning
        </Button>
      </div>
      </div>

    <ModalMain modalOpen={modalOpen} setModalOpen={setModalOpen} loading={loading} handleSubmit={handleSubmit} form={form} errors={errors} setForm={setForm} />
      
    </div>
  );
}

export default function ComponetsDemo() {
  return (
    <ToastProvider>
      <Demo />
    </ToastProvider>
  );
}