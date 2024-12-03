import ProductItem from "./components/product-item";

const dummmyProductData = ['Product 1', 'Product 2', 'Product 3'];


function ProductList(props) {
    // we will directly destructure is props function ProductList({name, city}) { }
    const {name, city} = props;
    return (
        <div>
            <h3>ECommerce Project</h3>
            {/* <ProductItem /> */}
            <h4>Name is {name} & city is {city}</h4>
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