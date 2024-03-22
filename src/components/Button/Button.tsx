import { Props } from '../../types/Props';
import './Button.css';

const Button: React.FC<Props> = ({ children, className, style, onClick, onDoubleClick }: Props) => {
  return (
    <div style={style} className={`ds-button-container ${className ?? ''}`} tabIndex={0}
      onClick={onClick} onDoubleClick={onDoubleClick}
    >
      {children}
    </div>
  );
}

export default Button;