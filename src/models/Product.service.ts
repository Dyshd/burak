import ProductModel from "../schema/Product.model";

class ProductService {
    [x: string]: any;
    private readonly productModel;  
    
    constructor(){
        this.productModel = this.ProductModel;
    }
}

export default ProductService