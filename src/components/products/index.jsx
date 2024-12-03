import ProductItem from "./components/product-item";




function ProductList(props) {
    const flag = true;





    // we will directly destructure is props function ProductList({name, city}) { }
    const {name, city, ListofProduct} = props;
    return (
        <div>
            <h3>ECommerce Project</h3>
            {/* <ProductItem /> */}

            {
                flag ? (<h4>Name is {name} & city is {city}</h4>) : (<h4>Hello World</h4>)
            }
            
           <ul>
            {
                ListofProduct.map((item, index)=>
                <li key={index}>{item}</li>)
            }
           </ul>


        </div>
    )
}
export default ProductList;