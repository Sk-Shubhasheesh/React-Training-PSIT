import { useEffect, useState } from "react";
import ProductItem from "./components/product-item";




function ProductList(props) {
    
    const { name, city, ListofProduct } = props;

    const[flag, setFlag] = useState(false)
    const[count, setCount] = useState(0)
    const[changeStyle, setChangeStyle] = useState(false  )

    function handleToggleText(){
        setFlag(!flag)
    }

    function handleIncreaseCount(){
        setCount(count +1);
    }

    useEffect(()=>{
        console.log("Run only page load");
        
    },[]) // This is run on page load once

    useEffect(()=>{
        console.log("count changes");
        if(count == 10) setChangeStyle(true)
        
    },[count]) // it render when count is change



    return (
        <div>
            <h3>ECommerce Project</h3>
            <button onClick={handleToggleText}>Toggle Text</button>
            {/* <ProductItem /> */}

            {
                flag ?  (<h4>Name is {name} & city is {city}</h4>) : (<h4>Hello World</h4>)
            }

            <div>
                <button style={{backgroundColor: changeStyle ?'black' : 'white',color:changeStyle?'white':'black'}} onClick={handleIncreaseCount}>Increase Count</button>
                <p>Count is {count}</p>
            </div>

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