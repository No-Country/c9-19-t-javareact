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
      background-color: #D60A0B;
      color: white;
    }
    .btn-main:hover {
      background-color: #be0a0b;
      color:white;
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
