import { Popconfirm } from 'antd'
import { useCallback, useContext, useMemo } from 'react'
import { BsCart4 } from 'react-icons/bs'
import CartContext from '../../context/CartContext'
import ProductsContext from '../../context/ProductsContext'
import CartProduct from './CartProduct'
import { CartArea, CartButton, TotalArea, BtnClean } from './style'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { Empty } from 'antd'

const Cart = () => {

    const { products } = useContext(ProductsContext)
    const { cart, cartOpen, toogleCartOpen, cleanCart } = useContext(CartContext)

    const findProduct = useCallback(
        productId => products.find(product => product.id === productId),
        [products]
    )

    const total = useMemo(() => cart.reduce(
        (total, cartProduct) => {
            const foundProducts = findProduct(cartProduct.id)
            const calculatePrice = foundProducts.price.discountedPrice * cartProduct.qty

            return total + calculatePrice
        },
        0
    ), [cart, findProduct]
    )

    const emptyCart = () => {
        return <Empty image={"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"} description={"Carrinho Vazio!"} />
    }
    return (
        <>
            <CartButton open={cartOpen} onClick={toogleCartOpen} qty={cart.length}>
                <BsCart4 />
            </CartButton>
            <CartArea open={cartOpen}>
                {
                    cart.length
                        ? <>
                            <h2>Produtos Selecionados</h2>
                            <div>{
                                cart.map(
                                    (cartProduct, index) =>
                                        <CartProduct key={`${cartProduct.id}_${index}`} product={cartProduct}></CartProduct>
                                )
                            }</div>
                            <Popconfirm
                                placement="bottomRight"
                                title={'Tem certeza que deseja limpar o carrinho?'}
                                icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                                onConfirm={cleanCart}
                                okText="Limpar"
                                cancelText="Cancelar"
                                okButtonProps={{ danger: true }}
                            >
                                <BtnClean>
                                    LIMPA CARRINHO
                                </BtnClean>
                            </Popconfirm>
                            <TotalArea>
                                Total: $ {total}
                            </TotalArea>


                        </>
                        : emptyCart()
                }
            </CartArea>



        </>
    )
}

export default Cart;