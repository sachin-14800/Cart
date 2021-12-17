import React from 'react';
const CartItem=(props)=>{
        const {price,title,qty}=props.product;
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDelete}=props;
        return (
            <div className='cart-items'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'grey'}}>Rs {price}</div>
                    <div style={{color:'grey'}}>Qty:{qty}</div>
                    <div className='cart-item-actions'>
                        {/* Buttons */}
                        <img 
                        alt="increase" 
                        className='action-icons' 
                        src="https://cdn-icons.flaticon.com/png/512/3416/premium/3416075.png?token=exp=1639574611~hmac=affb9c524052879d66c48ae17902e570"
                        onClick={()=>onIncreaseQuantity(product)}/>
                        <img 
                        alt="decrease" 
                        className='action-icons' 
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png"
                        onClick={()=>onDecreaseQuantity(product)}/>
                        <img 
                        alt="delete" 
                        className='action-icons' 
                        src="https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1639574691~hmac=88ad12a6ea6c0185604e02e032e99d8c"
                        onClick={()=>onDelete(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
    }


const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4
    }
}

export default CartItem;