import React  from "react";
import Navbar from "./Navbar";
import Cart from './Cart';

class App extends React.Component{
  constructor(){
    super();
    this.state={
        products:[
            {
                price:9999,
                title:'Phone',
                qty:1,
                img:'https://cdn-icons.flaticon.com/png/512/2482/premium/2482945.png?token=exp=1639724617~hmac=935df9243982f0f35ec7f57bccae5a03',
                id:1
            },
            {
                price:5999,
                title:'Watch',
                qty:1,
                img:'https://cdn-icons.flaticon.com/png/512/2523/premium/2523520.png?token=exp=1639724663~hmac=8ccd3a7e4c3598a927b87336b6957894',
                id:2
            },
            {
                price:2999,
                title:'Camera',
                qty:1,
                img:'https://cdn-icons-png.flaticon.com/512/1042/1042390.png',
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
getCartCount=()=>{
  const {products}=this.state;
  let count=0;
  products.forEach((element) => {
    count+=element.qty;
  });
  return count;
}
getCartTotal=()=>{
  const {products}=this.state;
  let value=0;
  products.map((product)=>{
    value+=product.qty*product.price;
  });
  return value;
}
render(){
  const {products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart
      products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handledecreaseQuantity}
      onDelete={this.handleDeleteProduct}
      />
      <div style={{padding:10,fontSize:20}}>TOTAL:{this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
