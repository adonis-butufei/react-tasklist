const Button = ({ type: { className, text, icon }, onClick }) => {

    return (
        <button className={className} onClick={onClick}>
            {text || icon()}
        </button>
    );
}

export default Button;


