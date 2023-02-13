import { Button } from 'react-bootstrap';

interface Props {
  text?: string;
  size?: 'sm' | 'lg' | undefined;
  className?: string | undefined;
  icon?: string | undefined;
  onClick: () => void;
}

const ButtonMain: React.FC<Props> = ({ className, text, size, icon, onClick }) => {
  return (
    <>
      <style type="text/css">
        {`
    .btn-main {
      background-color: #9C254D;
      color: white;
    }
    .btn-main:hover {
      background-color: #81254d;
      color:white;
    }
    .btn-main:not(:disabled):not(:disabled):active {
      background-color: #81254d;
      color:white;
    }
    .btn-sm {
      height: 3rem;
    }
    .btn-lg {
      height: 4rem;
    }
    .btn-main i {
      margin-left: .5rem;
    }
    `}
      </style>
      <Button
        className={className}
        variant="main"
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
export default ButtonMain;
