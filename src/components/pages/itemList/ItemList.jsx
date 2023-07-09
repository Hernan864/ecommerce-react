import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({items}) => {
    return (
        <div className="ite" style={{display:"flex", width:"100%", justifyContent:"space-evenly",flexWrap:"wrap",gap:"20px", paddingTop:"20px"}}>
            {items.map((item) => <ProductCard key={item.id} item={item}/>)}
        </div>
    )
}

export default ItemList