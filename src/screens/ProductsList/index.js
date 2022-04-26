

import Main from '../../componentes/Main';
import Cart from '../../componentes/Cart';
import { useCallback, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';
import ProductsContext from '../../context/ProductsContext';

import { LSK_CART } from '../../defaults/StorageKeys';
import ProductsAPI from '../../integrations/ProductsAPI';

const ProductsList = () => {

  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [product, setProduct] = useState([])

  const cartProductIsCurrentProduct = useCallback( (cartProduct, currentProduct) => (cartProduct.id === currentProduct.id
    && cartProduct.size === currentProduct.size
    && cartProduct.color === currentProduct.color), [])

  const addProductToCart = useCallback(product => {
    const foundProductIndex = cart.findIndex(
      cartProduct => cartProductIsCurrentProduct(cartProduct,product)
      )

    if (foundProductIndex !== -1) {
      setCart(
        cart.map(
          (cartProduct, index) =>
            index === foundProductIndex
              ? ({
                ...cartProduct,
                qty: parseInt(cartProduct.qty, 10) + 1
              })
              : cartProduct
        )
      )
    } else {

      setCart([
        ...cart,
        {
          ...product,
          qty: 1
        }

      ])
    }

    setCartOpen(true)
  }, 
  [cart, cartProductIsCurrentProduct]
  )






  const removeProductFromCart = useCallback( product => {
    setCart(
      cart.filter(cartProduct =>
        cartProduct.id !== product.id
        || cartProduct.size !== product.size
        || cartProduct.color !== product.color)
    )
  }, 
  [cart]
  )

  const cleanCart = useCallback(
    () => {
      setCart(
        []
      )
    }, []
  )
   


  const toogleCartOpen = useCallback( 
    () => setCartOpen(!cartOpen) , 
    [cartOpen]
    ) 

    const changeProductQtyInCart = useCallback(
      (cartProduct,qty) => {
        setCart(
          cart.map(
            currentCartProduct => 
            cartProductIsCurrentProduct(cartProduct, currentCartProduct)
            ? ({
              ...currentCartProduct,
              qty
            })
            : currentCartProduct
          )
        )
      }, [cart, cartProductIsCurrentProduct]
    )

    useEffect(
      () => {
       const storeCart = localStorage.getItem(LSK_CART)
       if (!storeCart) return;

       const parsedStoredCart = JSON.parse(storeCart)
       setCart(parsedStoredCart)
      }, []
    )

      useEffect(
       () => {
           (async () => {
            
            const responseJson = await ProductsAPI.fetchProducts()
           
           setProduct(responseJson)

           }) ()
         }, []
     )
  

  return (
    <div>
      {/* <Button>Teste</Button> */}
      {/* <CheckableButton> TESTE</CheckableButton> */}
      {/* <Contador></Contador> */}

     
      <ProductsContext.Provider value={{
        products: product,
      }}>
        <CartContext.Provider value={{
          cart,
          cartOpen,
          addProductToCart,
          removeProductFromCart,
          toogleCartOpen,
          changeProductQtyInCart,
          cleanCart
        }}>
          <Cart cart={cart} />
          <Main />
        </CartContext.Provider>
      </ProductsContext.Provider>
    </div>


  )
};

export default ProductsList;
  


