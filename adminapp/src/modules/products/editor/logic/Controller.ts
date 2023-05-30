
import { Repository } from "@vinstacore";


interface createProductOptions {
    name: string,
    description?: string,
    imageUrls: string[],
    code: string,
    price: number,
    quantity: number
}

export class ProductEditorController {



    public cancel() {


    }

    public createProduct(options: createProductOptions): Repository.Product {
        let product = {
            id: options.code,
            name: options.name,
            price: options.price,
            quantity: options.quantity,
            description: options.description,
            imageUrls: options.imageUrls.map((url, index) => {
                return {
                    id: index,
                    url: url
                }
            })
        }


        return product

    }

    public updateProduct(options: createProductOptions): Repository.Product {

        let product ={
            id: options.code,
            name: options.name,
            price: options.price,
            quantity: options.quantity,
            description: options.description,
            imageUrls: options.imageUrls.map((url, index) => {
                return {
                    id: index,
                    url: url
                }
            })
        }


        return product

    }

}
