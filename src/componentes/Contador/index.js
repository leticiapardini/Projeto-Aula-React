import { useState } from "react"
import { ButtonContador } from "./styles"
import  propTypes from "prop-types";
const Contador = ({step, startValue}) => {

    const [contador, setContador] = useState(startValue)

    const soma = () => (
        setContador(contador + step)
    )

    const subtracao = () => (
        setContador(contador - step)
    )

    return(
    <div>
        <ButtonContador onClick={soma}> + </ButtonContador>
        <span>{contador}</span>
        <ButtonContador onClick={subtracao}> - </ButtonContador>
    </div>
    )
}

Contador.defaultProps = {
    startValue: 1000,
    step: 1,
}

Contador.propTypes = {
    startValue: propTypes.number,
    step: propTypes.number,
}



export default Contador