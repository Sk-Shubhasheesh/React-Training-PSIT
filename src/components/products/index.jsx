import ProductItem from "./components/product-item";




function ProductList(props) {
    const flag = true;
    // function renderTextBlock(getFlag) {
    //     return getFlag ? <h4>Name is {name} & city is {city}</h4> : <h4>Hello World</h4>

    // }
    

    // we will directly destructure is props function ProductList({name, city}) { }
    const { name, city, ListofProduct } = props;
    const renderTextBlock = flag ? <h4>Name is {name} & city is {city}</h4> : <h4>Hello World</h4>

   

    return (
        <div>
            <h3>ECommerce Project</h3>
            {/* <ProductItem /> */}

            {
                renderTextBlock
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