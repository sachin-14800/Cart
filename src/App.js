import React  from "react";
import Navbar from "./Navbar";
import Cart from './Cart';
// import  firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
class App extends React.Component{
  constructor(){
    super();
    this.state={
        products:[
        ],
        loading:true
    }
}
componentDidMount(){
  // 
  firebase
  .firestore()
  .collection('products')
  .onSnapshot((snapshot)=>{
    // console.log(snapshot);
    const products=snapshot.docs.map((doc)=>{
      const data=doc.data();
      data['id']=doc.id;
      return data;
    });
    this.setState({
      products,
      loading:false
    });
  });
}
// {
//   price:9999,
//   title:'Phone',
//   qty:1,
//   img:'https://cdn-icons-png.flaticon.com/512/15/15874.png',
//   id:1
// },
// {
//   price:5999,
//   title:'Watch',
//   qty:1,
//   img:'https://cdn-icons-png.flaticon.com/512/916/916337.png',
//   id:2
// },
// {
//   price:2999,
//   title:'Camera',
//   qty:1,
//   img:'https://cdn-icons-png.flaticon.com/512/1042/1042390.png',
//   id:3
// }
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
  const {products,loading}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      {loading && <h1>Loading Products...</h1>}
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
