import { createContext } from "react";


const CartContext = createContext({
    cart: [],
    cartOpen: false,
    addProductToCart: product => undefined,
    removeProductFromCart: product => undefined,
    toogleCartOpen: () => undefined,
     changeProductQtyInCart : (cartProduct,qty) => undefined,
     cleanCart: () => undefined

})

// maneira de compartilhar os estados na aplicação

export default CartContext;