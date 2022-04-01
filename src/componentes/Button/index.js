import  propTypes from "prop-types";

const Button = ({text,onClick}) => (
<>
    <button onClick={onClick}>{text}</button>
</>
);

Button.propTypes = {
    text: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired
}

export default Button
  
   
