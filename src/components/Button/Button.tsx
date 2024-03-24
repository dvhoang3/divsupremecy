import { HTMLAttributes } from "react";
import './Button.css';

type ButtonProps = {

} & HTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, className, ...htmlAttributes }: ButtonProps) => {
  return (
    <button className={`ds-button-container ${className ?? ''}`} {...htmlAttributes}
    >
      {children}
    </button>
  );
}

export default Button;