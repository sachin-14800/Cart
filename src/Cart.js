import React from 'react';
import CartItem from "./CartItem";
class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[
                {
                    price:9999,
                    title:'Phone',
                    qty:1,
                    img:'',
                    id:1
                },
                {
                    price:5999,
                    title:'Watch',
                    qty:1,
                    img:'',
                    id:2
                },
                {
                    price:2999,
                    title:'Camera',
                    qty:1,
                    img:'',
                    id:3
                }
            ]
        }
    }
    handleIncreaseQuantity=(product)=>{
        const {products}=this.state;
        const index=products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products:products
        })
    }
    handledecreaseQuantity=(product)=>{
        const{products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty==0)
        return;
        products[index].qty-=1;
        this.setState({
            products
        })
    }
    handleDeleteProduct=(id)=>{
        const {products}=this.state;
        const items=products.filter((item)=>item.id!==id);
        this.setState({
            products:items
        })
    }
    render()
    {
        const {products}=this.state;
        return(
            <div className='cart'>
                
                {products.map((product)=>{
                  return  <CartItem 
                  product={product} 
                  key={product.id} 
                  onIncreaseQuantity={this.handleIncreaseQuantity}
                  onDecreaseQuantity={this.handledecreaseQuantity}
                  onDelete={this.handleDeleteProduct}
                  />
                })}
            </div>
        );
    }
}



export default Cart;