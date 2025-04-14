interface IButtonProps {
  label?: string | "Button";
  onClick?: () => void;
  type?: "button" | "Submit" | "reset";
  variant?: "primary" | "seconday" | "danger" | undefined;
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

export default function Button2({
  label,
  onClick,
  type,
  variant,
  disabled,
  className,
  icon,
  isLoading,
}: IButtonProps) {
  //   const baseStyles = "px-4 py-2 rounded-lg font-medium transition duration-300";
  const baseStyles =
    "bg-primary text-white border border-teal-500 py-2 px-8 rounded-lg shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:bg-secondary hover:text-black";

  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-300 text-gray-700 hover:bg-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <>
      <button
        type={"submit"}
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyles} ${variantStyles} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`}
      >
        {label}
        {/* {isLoading ? <></> : <></>} */}
      </button>
    </>
  );
}
