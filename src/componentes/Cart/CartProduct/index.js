import PropTypes from 'prop-types'
import { Button, Popconfirm } from 'antd'

import { DeleteOutlined, QuestionCircleOutlined } from '@ant-design/icons'
import ColorDisplay from '../../ColorsDisplay'
import { Container, Settings, Price, Description } from './styles'
import { useContext, useMemo } from 'react'
import CartContext from '../../../context/CartContext'
import ProductsContext from '../../../context/ProductsContext'



const CartProduct = ({ product: cartProduct }) => {

    const { changeProductQtyInCart, removeProductFromCart } = useContext(CartContext)
    const { products } = useContext(ProductsContext)


    const foundProducts = useMemo(() => products.find(
        currentProduct => currentProduct.id === cartProduct.id
    ), [])

    const color = useMemo(() => foundProducts.model.colors.find(
        currentColor => currentColor.id === cartProduct.color
    ), [cartProduct.color, foundProducts.model.colors])

    const product = useMemo(
        () => ({
            ...foundProducts,
            ...cartProduct
        }), [foundProducts, cartProduct]
    )

    const handleQtyChange = evt => {
        const qty = evt.target.value

        changeProductQtyInCart(cartProduct, qty)
    }

    
    return (
        <Container>
            <img src={product.photos[0]} alt='' width={50} height={50} />
            <div>
                <Description> {product.model.description}</Description>
                <Settings>
                    <p>Size: {product.size}</p>
                    <ColorDisplay color={color.hex}></ColorDisplay>
                </Settings>
                <Price>
                    <p> Qty: <input type="number" value={product.qty} min={1} onChange={handleQtyChange} /></p>
                    <p>Price: $ {product.price.discountedPrice}</p>
                </Price>
            </div>


            <Popconfirm
                placement="bottomRight"
                title={'Tem certeza que deseja remover o produto?'}
                icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                onConfirm={() => removeProductFromCart(product)}
                okText="Remover"
                cancelText="Cancelar"
                okButtonProps={{ danger: true }}
            >
                <Button size='small'
                    shape='circle'
                    icon={<DeleteOutlined style={{
                        fontSize: '10px'
                    }} />} />
            </Popconfirm>

        </Container>
    )

    CartProduct.propTypes = {
        product: PropTypes.shape({
            size: PropTypes.number,
            color: PropTypes.string,
            qty: PropTypes.number
        })
    }
}

export default CartProduct