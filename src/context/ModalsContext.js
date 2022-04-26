import { createContext } from "react";

export default createContext({
    modalCadastreProduct: {
        visible: false,
        open: () => undefined,
        close: () => undefined
    }
})