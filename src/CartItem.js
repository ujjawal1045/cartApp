import React from 'react';


//class CartItem extends React.Component {
    const CartItem = (props) => {
    // constructor () {
    //     // call constructoer of component class
    //     super();
    //     this.state = {
    //         price: 9699,
    //         title: 'Mobile phone',
    //         qty:  4,
    //         img: ''
    //     }
    // }

    // increaseQuantity = () => {
    //     //this.state.qty += 1;
    //     console.log('this.state', this.state);
    //     //setstate form1(passing state)
    //     // this.setState({
    //     //     qty: this.state.qty + 1
    //     // });
    //     // setstate form2(passing function) if previous state req use this
    //     this.setState((prevState) => {
    //         return {
    //             qty : prevState.qty + 1
    //         }
    //     }, () => {} //passing this 2nd argument because this.state is asynchromous call and we dont know whwn it'll complete so this 2nd arg will only wxwcurte when prev is complete
    //     );
    // }

    // decreaseQuantity = () => {
    //     const { qty} = this.state;
    //     if(qty == 0)
    //     return;
    //     console.log('this.state', this.state);
    //     this.setState((prevState) => {
    //         return {
    //             qty : prevState.qty - 1
    //         }
    //     }, () => {}
    //     );
    // }

    //render () {
        console.log('this.props',props);
        // oblect destructuring
        const {price, title, qty} = props.product;
        const {
            product , 
            onIncreaseQuantity, 
            onDecreaseQuantity, 
            onDeleteProduct
            } = props;
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
                        <img 
                        alt="increase" 
                        className='action-icons'
                         src='https://cdn-icons-png.flaticon.com/512/992/992651.png' 
                        //  onClick = {this.increaseQuantity}
                        onClick = {() => props.onIncreaseQuantity(props.product)}
                         />
                        <img
                         alt="decrease" 
                         className='action-icons' 
                         src='https://cdn-icons-png.flaticon.com/512/992/992683.png' 
                         //onClick = {this.decreaseQuantity}
                         onClick = {() => props.onDecreaseQuantity(props.product)}
                         
                         /> 
                        <img 
                        alt="delete"
                         className='action-icons'
                          src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
                          onClick = {() => onDeleteProduct(product.id)}
                        /> 
                    </div>
                </div>
            </div> 
        )
    //}
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