import "./App.css";
import ClassBasedComponent from "./components/class-based-component"
import FunctionalComponent from "./components/functional-components";
import ProductList from "./components/products";
// APP->PRODUCT LIST->PRODUCT ITEM
const dummyProductData=["Product 1","Product 2","Product 3"];
function App() {
  return (
    <div>
      <h1>  React Journey</h1>
      {/*<ClassBasedComponent />
      <FunctionalComponent /> */}
      <ProductList listofProducts={dummyProductData} name="Abhinav" city="Delhi" />
    </div>
  )
}

export default App
