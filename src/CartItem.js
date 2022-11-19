import React from 'react';


class CartItem extends React.Component {
    render () {
        return (
            <div class="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ {fontSize: 25, fontFamily: 'sans-serif'}}> phone</div>
                    <div style={ {fontSize: 25, color: '#777'}}>999 </div>
                    <div style={ {fontSize: 25, color: '#777', fontFamily: 'sans-serif'}}> qty: 1</div>
                    <div className="cart-item-actions">
                        {/* countaction*/}
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