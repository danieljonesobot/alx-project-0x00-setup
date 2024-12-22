import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, className = '', onClick }) => {
  return (
    <button
      className={`px-4 py-2 font-medium border transition-all ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;