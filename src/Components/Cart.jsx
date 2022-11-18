import React from 'react'
import { useContext } from 'react'
import { Context } from './ContextProvider'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Count from './Count';
 
const Cart = () => {
   
    const { data,handleAdd,handleRemove,clearCart}=useContext(Context)
    const su=data.reduce((s,el)=>{return s+el.total_price},0)
    const su1=data.reduce((s,el)=>{return s+el.quantity},0)
  
  return (
    <>
    <header>
        <div className="continue-shopping">
            <img className="arrow-icon" src="https://github.com/thapatechnical/addtocartreact/blob/main/public/images/arrow.png?raw=true" alt="arrow"/>
            <h3>Continue Shopping</h3>
        </div>
        <div className="cart-icon">
            <img src="https://github.com/thapatechnical/addtocartreact/blob/main/public/images/cart.png?raw=true" alt="cart"/>
            
            <p>{su1}</p>        
        </div>
    </header>
    <section className="main-cart-section">
    <h1>shopping Cart</h1>
        <p className="total-items">
          you have <span className="total-items-count">{su1} </span> items
          in shopping cart
        </p>
        <div className="cart-items">
            <div className="cart-items-container">
                     <Scrollbars >
                       {
                         data.map((el)=>{
                         return (<>
                           <div className="items-info">
                      <div className="product-img">
                            <img src={el.img} alt="image"/>
                      </div>

                      <div className="title">
                        <h2>{el.title}</h2>
                        <p>{el.description}</p>
                      </div>

                      <Count {...el} handleAdd={handleAdd} />

                      <div className="price">
                            <h3>Rs. {el.total_price}</h3>
                      </div>

                      <div className="remove-item" >
                        <i className="fas fa-trash-alt remove"  onClick={()=>handleRemove(el.id)}></i>
                      </div>
                    </div>
                <hr/>
                              </>)
                           })
                     }
                    </Scrollbars>
            </div>
        </div>
<div className="card-total">
        <h3>Cart Total: Rs {su}</h3>
        <button>CHECKOUT</button>
        {/* <button className="clear-cart" onClick={clearCart}>Clear Cart</button> */}
</div>
    </section>  
    </>
  )
}
export default Cart