

import { useContext, useState } from "react";
import Product from "../../Product";
import { Container } from "./styles";
import ProductsContext from "../../context/ProductsContext";
import { Button } from "antd";
import ModalCadastreProduct from "../modals/ModalCadastreProduct";
import ModalsContext from "../../context/ModalsContext"




const Main = () => {

    const [modalCadastreProductVisible, setModalCadastreProductVisible ] = useState(false)

    const {products} = useContext(ProductsContext)

    const openModalCadastreProduct = () => {
        setModalCadastreProductVisible(true)
    }

    const closeModalCadastreProduct = () => {
        setModalCadastreProductVisible(false)
    }
return(
    <ModalsContext.Provider value={{
        modalCadastreProduct: {
            visible: modalCadastreProductVisible,
            open: openModalCadastreProduct,
            close: closeModalCadastreProduct

        }
    }}>
        <Container>
            <h2> Listagem</h2>
            <Button onClick={openModalCadastreProduct}>Cadastrar Produto</Button>
            
            {
                products.map(product => 
                    <Product key={product.id}product={product} ></Product>)
            }
            <ModalCadastreProduct/>
        </Container>
    </ModalsContext.Provider>
)}
export default Main;



