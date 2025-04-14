import Form from "@/components/ui/forms/form";
import toast from "react-hot-toast";

interface Iform {}

function HandleSubmit(e: any) {
  // e.preventDefault();

  toast.success("Form Submitted");
}

export default function SignUp() {
  return (
    <>
      <Form
        // onSubmit={function (values: Record<string, string>): void {}}
        onSubmit={HandleSubmit}
        showSubmitButton={true}
        terms
        fields={[
          {
            name: "first_name",
            label: "First Name",
            type: "text",
            required: true,
          },
          {
            name: "last_name",
            label: "Last Name",
            type: "text",
            required: true,
          },
          // {
          //   name: "country",
          //   label: "Select Your Country",
          //   type: "select",
          //   required: true,
          //   options: [
          //     { value: "developer", label: "Developer" },
          //     { value: "designer", label: "Designer" },
          //     { value: "manager", label: "Manager" },
          //   ],
          // },
          {
            name: "phone_number",
            label: "Phone Number",
            type: "number",
            required: true,
          },
          {
            name: "email",
            label: "Email Address",
            type: "email",
            required: true,
          },
          {
            name: "enter_password",
            label: "Enter Password",
            type: "password",
            required: true,
            placeholder: "**********",
          },
          {
            name: "comfirm_password",
            label: "Comfirm Password",
            type: "password",
            required: true,
            placeholder: "**********",
          },
        ]}
      />
    </>
  );
}
