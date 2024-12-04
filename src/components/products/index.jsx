import { useState } from "react";
import ProductItem from "./components/product-item";




function ProductList(props) {
    const[flag, setFlag] = useState(false)
    const { name, city, ListofProduct } = props;

    function handleToggleText(){
        setFlag(!flag)
    }
    return (
        <div>
            <h3>ECommerce Project</h3>
            <button onClick={handleToggleText}>Toggle Text</button>
            {/* <ProductItem /> */}

            {
                flag ?  (<h4>Name is {name} & city is {city}</h4>) : (<h4>Hello World</h4>)
            }

            <ul>
                {
                    ListofProduct.map((item, index) =>
                        <li key={index}>{item}</li>)
                }
            </ul>


        </div>
    )
}
export default ProductList;