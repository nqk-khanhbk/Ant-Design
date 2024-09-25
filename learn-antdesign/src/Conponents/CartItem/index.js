import "./CartItem.css";
function CartItem (props){
    const {item,style}= props;
    return (
        <>
        <div className="cart-item" style={style}>
             {item && <h3>{item}</h3>}
            
        </div>
        
        </>
    )
}
export default CartItem;