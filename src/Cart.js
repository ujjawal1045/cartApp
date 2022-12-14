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
    render () {
        const {products} = this.state;
        return (
            <div className='cart'>
                {products.map((product) => {
                 return (
                    <CartItem
                    product={product}
                    key={product.id}
                    /> 
                 )
                })}
            </div>
        );
    }
}



export default Cart;