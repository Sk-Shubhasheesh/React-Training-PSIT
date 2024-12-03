import ProductItem from "./components/product-item";

const dummmyProductData = ['Product 1', 'Product 2', 'Product 3'];

function ProductList() {
    return (
        <div>
            <h3>ECommerce Project</h3>
            {/* <ProductItem /> */}
           <ul>
            {
                dummmyProductData.map((item, index)=>
                <li key={index}>{item}</li>)
            }
           </ul>


        </div>
    )
}
export default ProductList;