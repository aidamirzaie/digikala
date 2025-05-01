import mobileimg from '../../assets/mobile.webp'
function ProductCard(){
    return(
        <>
         <div className="card"> 
             <img className="myimage" src={mobileimg} alt="this is amn image"/>
             <h5 className="item title"> blutooth hedfon model</h5>
             <p className="discount">8,400,000 Rial</p>
             <p className="discount_percentage">40%</p>
             <p className="price">11,120,000 Rial</p>

             </div>
        
        
        
        </>
    )
    

}


export default ProductCard

