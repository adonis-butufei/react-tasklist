import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ErrorToastify = ({ msg, onEndDisplay }) => {

    toast.error(msg , {toastId: "unique Id"});
    
    setTimeout(() => {
        onEndDisplay();
    }, 3000);

    return (
        <>
            <ToastContainer autoClose={3000} />
        </>

    );

}

export default ErrorToastify;