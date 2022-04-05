import { useState } from "react"
import { StyledBtn } from "./styles"

const CheckableButton = ({children}) => {

    const [checked, setChecked] = useState(false)

   const toggleCheck = () => (
       setChecked(!checked)
   )



  return(
       <StyledBtn checked={checked}onClick={toggleCheck}> {
           checked
           ? 'Checked'
        : 'Not Checked'}</StyledBtn>
    )
}

export default CheckableButton

