import React from "react";

const Navbar = ()=>{
    
        return(
            <div style={styles.nav}>
                <div style={styles.cartIconContainer}>
                    <img 
                    style={styles.cartIcon}
                    src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838838.png?token=exp=1639722241~hmac=8a5858cdb28d5bd959df76750c4efb1c" 
                    alt="cart-icon"/>
                    <span style={styles.cartCount}>5</span>
                </div>
            </div>
        );
    }
const styles={
    cartIcon:{
      height:32,
      marginRight:30
    },
    nav:{
      height:70,
      background:'#4267b2',
      display:'flex',
      justifyContent:'flex-end',
      alignItems:'center'
    },
    cartIconContainer:{
      position:'relative'
    },
    cartCount:{
      background:'yellow',
      borderRadius:'50%',
      padding: '4px 8px',
      position:'absolute',
      right:15,
      top:-9
    }
  }

export default Navbar;