import { SizeArea, ColorsArea, SelectButton } from "../styles";
import Button from "../../componentes/Button";
import ColorDisplay from "../../componentes/ColorsDisplay";

const ProductSettins = ({product, changeSize, changeColor, selectedSize, selectColor}) => {

    
return(
    <>
        <SizeArea>
            Size
            {
                product.model.sizes.map(size => <Button key={size} select={selectedSize === size }
                    onClick={()=>changeSize(size)}>{size}</Button>)
            }
        </SizeArea>
        <ColorsArea>
            Color
            {
                product.model.colors.map(({ hex, id }) =>
                    <ColorDisplay key={id} color={hex}
                    onClick={()=>changeColor(id)}
                    select={selectColor === id }></ColorDisplay>
                )
            }
        </ColorsArea>
    </>)
}

export default ProductSettins;