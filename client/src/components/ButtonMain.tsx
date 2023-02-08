import { Button } from 'react-bootstrap';

interface Props {
  text?: string;
  size?: 'sm' | 'lg' | undefined;
  onClick: () => void;
}

const ButtonMain: React.FC<Props> = ({ text, size, onClick }) => {
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
    .btn-main:active {
      background-color: #81254d;
    }
    .btn-sm {
      3rem;
    }
    .btn-lg {
      height: 4rem;
    }
    `}
      </style>
      <Button variant="main" size={size || 'sm'} onClick={() => onClick()}>
        {text || 'Button'}
      </Button>
    </>
  );
};
export default ButtonMain;
