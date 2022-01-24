import { RiCloseCircleLine } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';


const Button = ({action, onClick }) => {
    return (
        <button className={action}>
            
            {
                action === 'add' && 
                <AiOutlinePlus className="icon"
                onClick={onClick} />
            }

            {
                action === 'delete' && 
                <RiCloseCircleLine className="icon" />
            }

        </button>
        );
}
 
export default Button;