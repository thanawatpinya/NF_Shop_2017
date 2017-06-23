import React, {Component} from 'react';
import './Csshome.css'

class Home extends Component {
  render() {
    return (
      <div className="flex-container">
        <div className="sidebar-col" id="sidebar">
          <div>
            <div id="cart-div">
              <label id="cartfont" className="set-text-white">Cart</label>
            </div>
            <hr className="hrwidth"/>
            <div id="cartlist">
              <div id="in-cartlist">
                <label id="name-item">Product Name</label>
                <label>Amount</label>
                <label>Price</label>
              </div>
              <div id="in-cartlist">
                <label id="name-item">Iphone 7</label>
                <label>1</label>
                <label>1700฿</label>
              </div>
              <div id="in-cartlist">
                <label id="name-item">Iphone 7</label>
                <label>1</label>
                <label>1700฿</label>
              </div>
              <div id="in-cartlist">
                <label id="name-item">Iphone 7</label>
                <label>1</label>
                <label>1700฿</label>
              </div>
              <div id="in-cartlist">
                <label id="name-item">Iphone 7</label>
                <label>1</label>
                <label>1700฿</label>
              </div>
            </div>
          </div>
          <div className="checkoutset">
            <div id="button">
              <button className="button button-hover">Checkout</button>
            </div>
            <div id="total-content">
              <label>Total Price : </label><label>0 </label>
            </div>
          </div>
        </div>
        <div className="flex-wrap">
          <div className="flex-item">
            test
          </div>
          <div className="flex-item">
            test
          </div>
          <div className="flex-item">
            test
          </div>
          <div className="flex-item">
            test
          </div>
          <div className="flex-item">
            test
          </div>
          <div className="flex-item">
            test
          </div>
          <div className="flex-item">
            test
          </div>
          <div className="flex-item">
            test
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
