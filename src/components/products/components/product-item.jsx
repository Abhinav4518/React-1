import "./product-item.module.css"

function ButtonComponent(){
    return <button className="buttonstyle">
        Click
    </button>
}


function ProductItem({singleProductItem,key}){
    return (
        <div style={{padding:"20px", border:"1px solid red", marginBottom:"20px"}} key={key}>
            <p className="{styles.productTitle}">{singleProductItem}</p>
            <ButtonComponent />
        </div>
    )
}

export default ProductItem;