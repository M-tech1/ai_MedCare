import React, { useState } from "react";
import { Button } from "../button/button";

interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "number" | "select" | "textarea";
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[]; // Only for select fields
  showSumbitButton?: boolean;
}

interface FormProps {
  fields: FormField[];
  onSubmit: (values: Record<string, string>) => void;
}

const Form: React.FC<FormProps> = ({ fields, onSubmit }) => {
  // export function Form({ fields, onSubmit }: FormProps) {
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    const newErrors: Record<string, string> = {};
    fields.forEach(({ name, required }) => {
      if (required && !formValues[name]) {
        newErrors[name] = "This field is required";
      }
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Submit data
    onSubmit(formValues);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      {fields.map(({ name, label, type, placeholder, required, options }) => (
        <div key={name} className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            {label} {required && <span className="text-red-500">*</span>}
          </label>

          {type === "text" ||
          type === "email" ||
          type === "password" ||
          type === "number" ? (
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={formValues[name] || ""}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg border-solid shadow-md ${
                errors[name] ? "border-red-500" : "border-gray-300"
              }`}
            />
          ) : type === "textarea" ? (
            <textarea
              name={name}
              placeholder={placeholder}
              value={formValues[name] || ""}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg h-24 border-solid shadow-md ${
                errors[name] ? "border-red-500" : "border-gray-300"
              }`}
            />
          ) : type === "select" && options ? (
            <select
              name={name}
              value={formValues[name] || ""}
              onChange={handleChange}
              className={`w-full p-2 border rounded-lg border-solid shadow-md ${
                errors[name] ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select an option</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : null}

          {errors[name] && (
            <p className="text-red-500 text-sm">{errors[name]}</p>
          )}
        </div>
      ))}

      {/* {showSumbitButton ? <></> :<></> } */}
      <Button onClick={() => console.log("clicked")} className="w-full">
        Button Submit
      </Button>
    </form>
  );
};

export default Form;
