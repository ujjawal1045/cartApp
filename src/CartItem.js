import React from 'react';


class CartItem extends React.Component {
    constructor () {
        // call constructoer of component class
        super();
        this.state = {
            price: 9699,
            title: 'Mobile phone',
            qty:  4,
            img: ''
        }
    }
    render () {
        // oblect destructuring
        const {price, title, qty} = this.state;
        return (
            <div class="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    {/* <div style={ {fontSize: 25, fontFamily: 'sans-serif'}}> {this.state.title}</div> */}
                    <div style={ {fontSize: 25, fontFamily: 'sans-serif'}}> {title}</div>
                    <div style={ {fontSize: 25, color: '#777'}}>  Rs {price} </div>
                    <div style={ {fontSize: 25, color: '#777', fontFamily: 'sans-serif'}}> qty: {qty} </div>
                    <div className="cart-item-actions">
                        {/* countaction*/}
                        <img alt="increase" className='action-icons' src='https://cdn-icons-png.flaticon.com/512/992/992651.png' /> 
                        <img alt="decrease" className='action-icons' src='https://cdn-icons-png.flaticon.com/512/992/992683.png' /> 
                        <img alt="delete" className='action-icons' src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png' /> 
                    </div>
                </div>
            </div> 
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;