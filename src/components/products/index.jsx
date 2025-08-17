import ProductItem from "./components/product-item";
import "./style.css";
const dummyProductData=["Product 1","Product 2","Product 3"];

function ProductList({name,city,listofProducts}){
    const flag=true;

    function renderTextBlock(getFlag){
        return getFlag? (<h4>
                                Name is {name} and city is {city}
                            </h4>
                        ):(
                            <h4>
                                Hello World 
                            </h4>
                        )
    }
    return (
        <div>
            <h3 className="title">Ecommerce Project</h3>
            {/*ProductItem /> */}
            {/*<h4>Name is {name} and city is {city}</h4>*/}
            <ul>
                
                  { /*dummyProductData.map((item,index)=>(
                        <li key={index}>{item}</li> */}
                    {renderTextBlock(flag)}

                    {listofProducts.map((item,index)=>(
                        <ProductItem singleProductItem={item}  key={index} />
                    ))}
                
            </ul>
        </div>
    )
}

export default ProductList