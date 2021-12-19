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
    this.db=firebase.firestore();
}
componentDidMount(){
  // 
  this.db
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
    // products[index].qty+=1;
    // this.setState({
    //     products:products
    // });
    const docRef=this.db.collection('products').doc(products[index].id);
    docRef.update({
      qty:products[index].qty+1
    })
    .then(()=>{
      console.log('Product updated');
    })
    .catch((error)=>{
      console.log('Error',error);
    })
}
handledecreaseQuantity=(product)=>{
    const{products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty==0)
    return;
    // products[index].qty-=1;
    // this.setState({
    //     products
    // })
    const docRef=this.db.collection('products').doc(products[index].id);
    docRef.update({
      qty:products[index].qty-1
    })
    .then(()=>{
      console.log('Product updated');
    })
    .catch((error)=>{
      console.log('Error',error);
    });
}
handleDeleteProduct=(id)=>{
    const {products}=this.state;

    const docRef=this.db.collection('products').doc(id);
    docRef.delete().then(()=>{
      console.log('product deleted');
    })
    .catch((error)=>{
      console.log('Error',error);
    });
    // this.setState({
    //     products:items
    // })
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
addProduct=()=>{
  this.db
  .collection('products')
  .add({
    img:'',
    price:10000,
    qty:3,
    title:'Washing machine'
  })
  .then((docRef)=>{
    console.log('This product has been added',docRef);
  })
  .catch((error)=>{
    console.log('Error',error);
  });
}
render(){
  const {products,loading}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      {/* <button onClick={this.addProduct} style={{padding:20,fontSize:20,margin:20}}>Add a product</button> */}
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
