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

            {
                action === 'clear-all'
            }
            
        </button>
    );
}

export default Button;


// const ButtonActions = {
//     add: {
//         name: "add",
//         icon: AiOutlinePlus,
//         text: undefined
//     },
//     delete: {
//      //....
//     },
//     deleteAll: {
//         text: "Clear All"
//     }
//  };
 
//  export default ButtonActions;
 