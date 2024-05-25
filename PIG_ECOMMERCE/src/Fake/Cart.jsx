import React from 'react';
import './cart.css'
const Cart = ({ cart, REMOVE }) => {
  let total = 0;

  cart.forEach(itemcart => {
    total += itemcart.price;
  });
  return (
    <div className='container'>
      {cart.length === 0 && <h2 style={{ color: 'red' }} className='text-center'>The shopping cart is empty</h2>}
      <div className="row">
        {cart.map(function (itemcart, index) {
         
          return (
            <React.Fragment key={index}>
               
              <div className="col-lg-7 col-sm-6 montag">
                <img src={itemcart.thumbnail} alt="" className='totalimg' />
                <h4>Price: {itemcart.price}$</h4>
                {/* Change 'item' to 'itemcart' in the onClick function */}
                <button className='btn btn-danger' onClick={() => REMOVE(itemcart)}>Remove Product</button>
              </div>
              {(index === 0) && (
                <div className="col-lg-4 col-sm-12 totalmontag">
                  <h2 className='totalprice' style={{ fontSize: 25 }}>Total: <span className='text-end' style={{ color: 'red' }}>{total}$</span></h2>
                  <br />
                  <hr />
                  <button className='btn btn-dark'>Check Out</button>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
