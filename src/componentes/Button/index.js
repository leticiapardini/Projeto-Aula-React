import  propTypes from "prop-types";
import { StyledButton } from "./styles";


const Button = ({children, icon, onClick}) => (

    <>
        <StyledButton onClick={onClick}>
           {icon}
            {children}
        </StyledButton>
    </>

)


Button.propTypes = {
    onClick: propTypes.func,
    icon: propTypes.element
}

export default Button
    

   
  
   
