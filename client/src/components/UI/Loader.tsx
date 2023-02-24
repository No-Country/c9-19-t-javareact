// UI
import Spinner from 'react-bootstrap/Spinner';
import '../../styles/loader.css';

export interface Props {
    show: boolean
}

function Loader({ show }: Props) {
    return (
        <>
            {
                 show
                 &&
                 <div className='loader'>
                    <Spinner animation="border" role="status"> </Spinner>
                    <span> Cargando datos </span>
                 </div>
            }
        </>
    );
}

export default Loader;