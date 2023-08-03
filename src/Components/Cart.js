import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Home.css';
export default function Cart() {
  const y = useLocation();
  console.log(y.state);
  const navigate = useNavigate();
  const cartitems = y.state || [];
  let totald = 0;
  const [delivery, setDelivery] = useState(70);
  const [Platformfee, setPlatformfee] = useState(20);



  const handleOrder = () => {
    alert('Your Order is Placed');
    navigate('/restaurents');
  };
  return (
    <div>
      <div class="card text-center">
        <div class="card-header "><h3>Cart Items</h3></div>
        {cartitems.length ? (
          <>
            <div class="card-body">
              {cartitems.map((item) => {
                totald += item.count * item.Price;
                if (item.count > 0) {
                  return (
                    <div class="text">
                      <img
                        src={item.im}
                        style={{ width: '40px', height: '40px' }}
                      />
                      <h4>{item.iname}</h4>
                      <p style={{ marginLeft: '66%' }}>
                        {item.count} * {item.Price} ={' '}
                        {Math.trunc(item.count * item.Price)} RS
                      </p>
                    </div>
                  );
                }
              })}
            </div>
            <div class="ite">
              <h6>Delivery Charges ---- {delivery}Rs</h6>
              <h6> Platform fee ------- {Platformfee}Rs </h6>
              <h6>Total ------------{Math.trunc(totald + delivery + Platformfee)} Rs</h6>
            </div>
            <button onClick={handleOrder} className='btn btn-success'>Place Order</button>
          </>
        ) : (
          <div>You cart is empty</div>
        )}
      </div>
    </div>
  );
}
