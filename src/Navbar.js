import React from 'react';
import './navbar.css';


//class Navbar extends React.Component {
const Navbar = (props) => {

    //render () {
       
        return (
            <div style={styles.nav} >
              <div style={styles.cartIconContainer}>
                {/* <span style={styles.navbarLeft}>kings palace 16 dukan</span> */}
                <img style={styles.cartIcon} src='https://cdn-icons-png.flaticon.com/512/34/34568.png' alt='cart-icon' />
                <span style={styles.cartCount}>{props.count}</span>
              </div>
            </div> 
        );
    //}
}

const styles = {
   
    cartIcon: {
        height: 32,
        marginRight: 30
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 7,
        top: -9
    }
}

export default Navbar

