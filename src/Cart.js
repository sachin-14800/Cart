import React from 'react';
import CartItem from "./CartItem";
class Cart extends React.Component{
    render()
    {
        return(
            <div className='cart'>
                <CartItem qty={1} price={5999} title="Watch" />
                
            </div>
        );
    }
}



export default Cart;