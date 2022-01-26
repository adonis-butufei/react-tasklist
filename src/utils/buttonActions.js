import { RiCloseCircleLine } from 'react-icons/ri';
import { AiOutlinePlus } from 'react-icons/ai';

const ButtonActions = {
    add: {
        className: "add",
        icon: <AiOutlinePlus />,
        text: undefined
    },
    delete: {
        className: "delete",
        icon: <RiCloseCircleLine />,
        text: undefined
    },
    deleteAll: {
        className: "clear-all",
        icon: undefined,
        text: "Clear All"
    }
 };
 
 export default ButtonActions;
 