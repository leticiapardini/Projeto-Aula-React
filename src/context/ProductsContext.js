import { createContext } from "react";


const ProductsContext = createContext({
    products: [],
    
})

// maneira de compartilhar os estados na aplicação

export default ProductsContext;