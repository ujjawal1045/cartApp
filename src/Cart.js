import React from 'react';

import CartItem from './CartItem';


class Cart extends React.Component {
    render () {
        const arr = [1,2,3,4,5];
        return (
            <div className='cart'>
                {/* <CartItem />
                <CartItem />
                <CartItem /> */}
                {arr.map((item) => {
                    return item
                })}
            </div>
        );
    }
}



export default Cart;