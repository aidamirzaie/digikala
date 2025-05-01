
import './ProductCard.css'
function ProductCard(props){
    return(
        <>
         <div className="card"> 
             <img className="myimage" src={props.img} alt="this is amn image"/>
             <h5 className="item title">{props.title}</h5>
             <p className="discount">{props.discount}</p>
             <p className="discount_percentage">{props.discount_percentage}</p>
             <p className="price">{props.price}</p>

             </div>
        
        
        
        </>
    )
    

}


export default ProductCard

