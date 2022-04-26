
import { API_ENDPOINT } from "../defaults/Endpoint";

class ProductsAPI {
    static async fetchProducts () {
        const response = await fetch(`${API_ENDPOINT}/product`)
           const responseJson = await response.json()

           return responseJson
    }
}

export default ProductsAPI;

