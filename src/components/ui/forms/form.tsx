import React, { useState } from "react";
import MainButton from "../button";
// import Button2 from "../../ui/button";

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "password" | "number" | "select" | "textarea";
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  showSubmitButton?: boolean;
  width?: boolean;
  isLoading?: boolean;
}

interface FormProps {
  fields: FormField[];
  onSubmit: (values: Record<string, string>) => void;
  showSubmitButton?: boolean;
  terms?: boolean;
}

const Form: React.FC<FormProps> = ({
  fields,
  onSubmit,
  showSubmitButton,
  terms,
}) => {
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
      // console.log(formValues);
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    // Submit data
    onSubmit(formValues);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full bg-white mx-auto p-4 shadow-md rounded-lg"
    >
      {fields.map(
        ({
          name,
          label,
          type,
          placeholder,
          required,
          options,
          width,
          isLoading,
        }) => (
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
                  width ? "" : ""
                } 
                   ${errors[name] ? "border-red-500" : "border-gray-300 "}`}
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
        )
      )}
      {terms ? (
        <div className="mb-5 items-center">
          <input type="checkbox"></input>
          <small>
            yes, i understand & agree to AiMedCare terms of service, including
            the
            <a className="text-secondary" href="/">
              User Aggrement{" "}
            </a>
            and the
            <a className="text-secondary" href="/">
              Privacy Policy
            </a>
          </small>
        </div>
      ) : null}

      {showSubmitButton ? (
        <>
          {/* <Button onClick={() => console.log("testing button")}>Click</Button> */}
          <MainButton className="w-full" label="Submit" />
          {/* <Button2 className="w-full" label="Submit" /> */}
        </>
      ) : null}
    </form>
  );
};

export default Form;
