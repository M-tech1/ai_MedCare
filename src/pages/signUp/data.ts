import { FormField } from "@/components/ui/forms/form";

export const signupData: FormField[] = [
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
];
