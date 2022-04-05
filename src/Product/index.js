import airmax from "./airmax.json"
import { Container, InfoArea, PhotoArea, ModelLine, Collection, Description, Price, PriceArea, ActionArea, SizeArea, ColorsArea } from "./styles"
import Button from "../componentes/Button"
import {BsFillHandbagFill, BsFillCartFill} from 'react-icons/bs'
import  ColorDisplay  from "../componentes/ColorsDisplay/index"

const Product = () => (
    <Container>
        <PhotoArea>
            <img src={airmax.photos[0]}/>
        </PhotoArea>
        <InfoArea>
            <ModelLine>{airmax.model.line}</ModelLine>
            <Collection>{airmax.collection}</Collection>
            <Description>{airmax.model.description}</Description>
            <PriceArea>
                <Price>{airmax.price.discountedPrice}</Price>
                <Price scratched>{airmax.price.originalPrice}</Price>
            </PriceArea>
            <SizeArea>
                Size
                {
                    airmax.model.sizes.map(size => <Button>{size}</Button>)
                }
            </SizeArea>
            <ColorsArea>
                Color
                {
                airmax.model.colors.map(({hex}) =>
                    <ColorDisplay color={hex}></ColorDisplay>
                    )
                }
            </ColorsArea>
            <ActionArea>
                <Button icon={<BsFillHandbagFill/>}> Buy Now</Button>
                <Button icon={<BsFillCartFill/>}> Add to Cart</Button>
            </ActionArea>
        </InfoArea>
    </Container>
)

export default Product