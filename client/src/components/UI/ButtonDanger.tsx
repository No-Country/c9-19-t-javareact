import { Button } from 'react-bootstrap';

interface Props {
  text?: string;
  size?: 'sm' | 'lg' | undefined;
  className?: string | undefined;
  icon?: string | undefined;
  onClick: () => void;
}

const ButtonDanger: React.FC<Props> = ({ className, text, size, icon, onClick }) => {
  return (
    <>
      <style type="text/css">
        {`
    .btn-secondary {
        color: #fff;
        background-color: #6c757d;
        border-color: #6c757d;
    }
    .btn-secondary:hover {
        color: #fff;
        background-color: #5a6268;
        border-color: #545b62;
    }
    .btn-secondary:not(:disabled):not(:disabled):active {
        color: #fff;
        background-color: #5a6268;
        border-color: #545b62;
    }
    .btn-sm {
      height: 3rem;
    }
    .btn-lg {
      height: 4rem;
    }
    .btn-secondary i {
      margin-left: .5rem;
    }
    `}
      </style>
      <Button
        className={className}
        variant="danger"
        size={size || 'sm'}
        onClick={() => onClick()}
      >
        {text || 'Button'}
        {
          icon
          &&
          <i className={icon}> </i>
        }
      </Button>
    </>
  );
};
export default ButtonDanger;
