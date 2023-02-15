import { Button } from 'react-bootstrap';

interface Props {
  text?: string;
  size?: 'sm' | 'lg' | undefined;
  className?: string | undefined;
  icon?: string | undefined;
  onClick: () => void;
}

const ButtonOutlineMain: React.FC<Props> = ({ className, text, size, icon, onClick }) => {
  return (
    <>
      <style type="text/css">
        {`
    .btn-outline-main {
      background-color: #f0f1f3;
      color: #9C254D;
      border-color: #9C254D;
    }
    .btn-outline-main:hover {
      background-color: #81254d;
      color:#f0f1f3;
    }
    .btn-outline-main:not(:disabled):not(:disabled):active {
      background-color: #81254d;
      color:#f0f1f3;
    }
    .btn-sm {
      height: 3rem;
    }
    .btn-lg {
      height: 4rem;
    }
    .btn-outline-main i {
      margin-left: .5rem;
    }
    `}
      </style>
      <Button
        className={className}
        variant="outline-main"
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
export default ButtonOutlineMain;
