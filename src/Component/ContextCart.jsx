import React,{useState} from 'react'
import { Scrollbars } from 'react-custom-scrollbars-2';
import {products} from "./Product"
import { CartContext } from './Cart';
import Item from './Item';
import { useContext } from 'react';
const ContextCart = () => {
    // const [item,setItem]=useState(products)
const {item,clearCart, totalItem, totalAmount}=useContext(CartContext)

if (item.length === 0) {
    return (
      <>
       <header>
          <div className="continue-shopping">
            <img src="https://github.com/thapatechnical/addtocartreact/blob/main/public/images/arrow.png?raw=true" alt="arrow" className="arrow-icon" />
            <h3>continue shopping</h3>
          </div>

          <div className="cart-icon">
            <img src="https://github.com/thapatechnical/addtocartreact/blob/main/public/images/cart.png?raw=true" alt="cart" />
            <p>0</p>
          </div>
        </header>

        <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">
            you have <span className="total-items-count">0</span>{" "}
            items in shopping cart
          </p>
        </section>
      </>
    );
  }
  return (
    <>
<header>
        <div className="continue-shopping">
            <img className="arrow-icon" src="https://github.com/thapatechnical/addtocartreact/blob/main/public/images/arrow.png?raw=true" alt="arrow"/>
            <h3>Continue Shopping</h3>
        </div>
        <div className="cart-icon">
            <img src="https://github.com/thapatechnical/addtocartreact/blob/main/public/images/cart.png?raw=true" alt="cart"/>
            <p>{totalItem}</p>        
        </div>
    </header>
    <section className="main-cart-section">
    <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{totalItem} </span> items
          in shopping cart
        </p>
        <div className="cart-items">
            <div className="cart-items-container">
                     <Scrollbars >
                        {
                            item.map((el)=>{
                                return <Item key={el.id} {...el}/>
                            })
                        }
                    </Scrollbars>
            </div>
        </div>

<div className="card-total">
        <h3>Cart Total: Rs. {totalAmount}</h3>
        <button>CHECKOUT</button>
        <button className="clear-cart" onClick={clearCart}>Clear Cart</button>


</div>
    </section>
    </>
  )
}

export default ContextCart