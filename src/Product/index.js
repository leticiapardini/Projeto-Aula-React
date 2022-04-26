
import { BsFillHandbagFill, BsFillCartFill } from 'react-icons/bs'
import { Container, InfoArea, PhotoArea, ActionArea } from "./styles"
import Button from "../componentes/Button"
import ProductInfos from "./ProductInfos"
import ProductSettins from "./ProductSettins"
import { useContext, useState } from 'react'
import CartContext from '../context/CartContext'


const Product = ({ product }) => {

    const {addProductToCart} = useContext(CartContext)

    const [settins, setSettins] = useState({
        color: product.model.colors[0].id,
        size: product.model.sizes[0]
    });

    const changeSize = size => {
        setSettins({
            ...settins,
            size
        })
    }

    const changeColor = color => {
        setSettins({
            ...settins,
            color
        })
    }

    const handleAddProductToCart = () => {
        addProductToCart({
            id: product.id,
            size: settins.size,
            color:  settins.color,
            
        })
    }
   


    return (
    <>
        <Container>
            <PhotoArea>
                <img src={product.photos[0]} alt=''/>
            </PhotoArea>
            <InfoArea>
                <ProductInfos product={product}></ProductInfos>
                <ProductSettins product={product} setSettins={setSettins} changeSize={changeSize} changeColor={changeColor}
                selectColor= {settins.color}
                selectedSize={settins.size}></ProductSettins>
                <ActionArea>
                    <Button icon={<BsFillHandbagFill />}> Buy Now</Button>
                    <Button icon={<BsFillCartFill />} onClick= {()=> handleAddProductToCart()}> Add to Cart</Button>
                </ActionArea>
            </InfoArea>
        </Container>
       
    </>
    )
}

export default Product