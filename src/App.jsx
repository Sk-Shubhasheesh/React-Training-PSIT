import './App.css'
import ClassBasedComponent from './components/class-based-component'
import ContextButtonComponent from './components/context-concept/button';
import ContextTextComponent from './components/context-concept/text';
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'
import Users from './components/users';
import User from './components/users';


const dummmyProductData = ['Product 1', 'Product 2', 'Product 3'];


function App() {

  return (
    <div>

      
      <h1>Rect Js Concept 2024</h1>
      {/* <ClassBasedComponent /> */}
      {/* <FunctionalComponent />  */}

      {/* Nexted Component Example - App -> product list -> product item -> button component
 */}
      {/* {<ProductList ListofProduct={dummmyProductData} name="Shubhasheesh" city="Jaunpur" />} */}

      {/* <Users/> */}

      <ContextButtonComponent />
      <ContextTextComponent />



    </div>
  )
    
}

export default App
