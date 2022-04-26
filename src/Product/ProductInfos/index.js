import { ModelLine, Collection, Description, PriceArea, Price } from "./styles";
import PropTypes from 'prop-types';



const ProductInfos = ({ product }) => (
    <>
        <ModelLine>{product.model.line}</ModelLine>
        <Collection>{product.collection}</Collection>
        <Description>{product.model.description}</Description>
        <PriceArea>
            <Price>{product.price.discountedPrice}</Price>
            <Price scratched>{product.price.originalPrice}</Price>
        </PriceArea>
    </>
)

ProductInfos.propTypes = {
    product: PropTypes.shape({
        collection: PropTypes.string,
        model: PropTypes.shape({
            line: PropTypes.string,
            description: PropTypes.string
        }),
        price: PropTypes.shape({
            discountedPrice: PropTypes.number,
            originalPrice: PropTypes.number
        })
    })
}

export default ProductInfos;