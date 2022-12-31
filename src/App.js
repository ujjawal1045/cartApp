import React from 'react';

import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



class App extends React.Component{
  constructor () {
    // call constructoer of component class
    super();
    this.state = {
      products: [],
      loading: true
       //products: [
      //   { price: 9699,
      //       title: 'Mobile phone',
      //       qty:  4,
      //       img: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      //       id: 437862
      //   },

      //  { price: 999,
      //   title: 'Watch',
      //   qty:  1,
      //   img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      //   id: 437863
      //  },
      //  {
      //   price: 199,
      //   title: 'Earbuds',
      //   qty:  1,
      //   img: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1589&q=80',
      //   id:437864
      //  }
       //]
    }
}

componentDidMount () {
  // firebase
  // .firestore()
  // .collection('products')
  // .get()
  // .then((snapshot) => {
  //   console.log(snapshot);
  //   snapshot.docs.map((doc) => {
  //     console.log(doc.data())
  //   });

  //   const products = snapshot.docs.map((doc) => {
  //     const data = doc.data();

  //     data['id'] = doc.id;
  //     return data;
  //   })
  //   this.setState({
  //     products: products,
  //     loading: false
  //   })
  // })


  firebase
  .firestore()
  .collection('products')
  .onSnapshot((snapshot) => {
    console.log(snapshot);
    snapshot.docs.map((doc) => {
      console.log(doc.data())
    });

    const products = snapshot.docs.map((doc) => {
      const data = doc.data();

      data['id'] = doc.id;
      return data;
    })
    this.setState({
      products: products,
      loading: false
    })
  })
}
handleIncreaseQuantity = (product) => {
    console.log('hey, please increase quantity of ', product);
    const { products } = this.state;
    const index = products.indexOf(product);
    // products[index].qty = products[index].qty + 1;
    // this.setState({
    //     products: products
    // })
    const docRef = firebase.firestore().collection('products').doc(products[index].id);
    docRef
    .update({
      qty: products[index].qty + 1
    })
    .then(() =>{
      console.log('quantity updated successfully');
    })
    .catch((error) => {
      console.log('error', error);
    })
}

handleDecreaseQuantity = (product) => {
    console.log('hey please decrease the quantity of', product);
    const {products} = this.state;
    const index = products.indexOf(product);
     if(products[index].qty===0)
     return
    // products[index].qty -= 1;
    // this.setState({
    //     products
    // })
    const docRef = firebase.firestore().collection('products').doc(products[index].id);
    docRef
    .update({
      qty: products[index].qty - 1
    })
    .then(() => {
      console.log('quantity updated successfully');
    })
    .catch((error) => {
      console.log('error', error);
    })
}

handleDeleteProduct = (id) => {
    const { products} = this.state;

    const items = products.filter((item) => item.id !== id); //
    this.setState({
        products : items
    })
}
getCartCount = () => {
  const { products} = this.state;
  let count = 0;
  products.forEach((products) => {
    count += products.qty;
  })

  return count;
}

getCartTotal = () => {
  const { products } = this.state;
  let priceTotal = 0;
  products.map((product) =>{
    priceTotal = priceTotal + product.qty * product.price;
  })
  return priceTotal;
}
addProduct = () => {
  firebase
  .firestore()
  .collection('products')
  .add({
    img: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    price:29999,
    qty: 3,
    title:'washing machine'
  })
  .then ((docRef) => {
    console.log('product has been added',docRef);
  })
  .catch((error) =>{
    console.log('error',error);
  })

}
  render() {
    const { products,loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{padding: 20, fontSize:20}} >Add a Product</button>
        <Cart
        products={products}
        onIncreaseQuantity = {this.handleIncreaseQuantity}
        onDecreaseQuantity = {this.handleDecreaseQuantity}
        onDeleteProduct = {this.handleDeleteProduct}
        />
        {loading && <h1>Loading Products ..</h1>}
        <div style= {{padding:10, fontSize:20, fontFamily:'sans-serif'}}> TOTAL: { this.getCartTotal() } </div>
      </div>
    );
  }
  
}

export default App;
