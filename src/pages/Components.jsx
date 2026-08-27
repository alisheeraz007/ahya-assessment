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

      <Input
        label="Name"
        placeholder="Enter name"
        value={form.name1}
        onChange={(e) =>
          setForm({ ...form, name1: e.target.value })
        }
      />

      <Input
        label="Email"
        placeholder="Enter email"
        value={form.email1}
        onChange={(e) =>
          setForm({ ...form, email1: e.target.value })
        }
      />

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <Button variant="primary" onClick={() => setModalOpen(true)}>
          Open Modal
        </Button>

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
      </div>

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>

        <Button
          variant="primary"
          size="sm"
        >
          SM Primary
        </Button>

        <Button
          variant="secondary"
          size="md"
        >
          MD Secondary
        </Button>

        <Button
          variant="danger"
          size="lg"
        >
          LG Danger
        </Button>

         <Button
          variant="outline"
        >
          default outline
        </Button>
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