import React from 'react'

const Count = ({id,quantity,handleAdd,price,total_price}) => {
  return (
                    <div className="add-minus-quantity">
                      {/* <i className="fas fa-minus minus" disabled={quantity===1} onClick={()=>handleAdd(id,-1,quantity,price,total_price)}></i> */}
                     <button  className="plus-minus" disabled={quantity===1} onClick={()=>handleAdd(id,-1,quantity,price,total_price)}>-</button>
                      <input placeholder={quantity}/> 
                      {/* <i className="fas fa-plus plus" onClick={()=>handleAdd(id,+1,quantity,price,total_price)}></i> */}
                      <button className="plus-minus" onClick={()=>handleAdd(id,+1,quantity,price,total_price)}>+</button>
                      </div>
  )
}

export default Count