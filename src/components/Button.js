import { RiCloseCircleLine } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';


const Button = ({ action, onClick }) => {
    return (
        <button className={action} onClick={onClick}>

            {
                action === 'add' &&
                <AiOutlinePlus className="icon" />
            }

            {
                action === 'delete' &&
                <RiCloseCircleLine className="icon" />
            }

        </button>
    );
}

export default Button;