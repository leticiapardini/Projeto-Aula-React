import { StyledContanier } from "./styles"

const ColorDisplay = ({color, onClick, select}) => (
    <StyledContanier  color={color} onClick={onClick} select={select} />
)

export default ColorDisplay