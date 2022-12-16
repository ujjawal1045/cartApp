import React from 'react';

import CartItem from './CartItem';


class Cart extends React.Component {
    constructor () {
        // call constructoer of component class
        super();
        this.state = {
           products: [
            { price: 9699,
                title: 'Mobile phone',
                qty:  4,
                img: '',
                id: 437862
            },

           { price: 999,
            title: 'Watch',
            qty:  1,
            img: '',
            id: 437863
           },
           {
            price: 199,
            title: 'Earbuds',
            qty:  1,
            img: '',
            id:437864
           }
           ]
        }
    }
    handleIncreaseQuantity = (product) => {
        console.log('hey, please increase quantity of ', product);
        const { products } = this.state;
        const index = products.indexOf(product);
        products[index].qty = products[index].qty + 1;
        this.setState({
            products: products
        })
    }

    handleDecreaseQuantity = (product) => {
        console.log('hey please decrease the quantity of', product);
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty==0)
        return
        products[index].qty -= 1;
        this.setState({
            products
        })
    }
    render () {
        const {products} = this.state;
        return (
            <div className='cart'>
                {products.map((product) => {
                 return (
                    <CartItem
                    product={product}
                    key={product.id}
                    onIncreaseQuantity = {this.handleIncreaseQuantity}
                    onDecreaseQuantity = {this.handleDecreaseQuantity}
                    /> 
                 )
                })}
            </div>
        );
    }
}



export default Cart;