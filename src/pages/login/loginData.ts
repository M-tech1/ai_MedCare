import { FormField } from "@/components/ui/forms/form";

export const loginData: FormField[] = [
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
];
