import './Button.css';

type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: any;
  // onClick?: (e?: MouseEvent) => void;
}

const Button: React.FC<Props> = ({ children, className, style }: Props) => {
  return (
    <div style={style} className={`ds-button-container ${className ?? ''}`} tabIndex={0}
      // onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Button;