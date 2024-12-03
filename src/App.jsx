import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'

function App() {

  return (
    <div>
      <h1>Rect Js Concept 2024</h1>
      {/* <ClassBasedComponent />
      <FunctionalComponent /> */}

      {/* Nexted Component Example - App -> product list -> product item -> button component
 */}
      <ProductList />
    </div>
  )
    
}

export default App
