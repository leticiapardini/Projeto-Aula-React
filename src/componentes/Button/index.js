import  propTypes from "prop-types";
import { StyledButton } from "./styles";


const Button = ({children, icon, onClick, select}) => (

    <>
        <StyledButton onClick={onClick} select={select}>
           {icon}
            {children}
        </StyledButton>
    </>

)

Button.default = {
    select: false
}

Button.propTypes = {
    onClick: propTypes.func,
    icon: propTypes.element
}

export default Button
    

   
  
   
