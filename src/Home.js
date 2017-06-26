import React, {Component} from 'react';
import './Csshome.css'
import { Glyphicon, Button } from 'react-bootstrap';
let countid = 0;

class Home extends Component {
  constructor(){
    super()
    this.state={
      itemlist:[
        {id:0,name:"Iphone1",price:10000,count:1},
        {id:1,name:"Iphone2",price:20000,count:1},
        {id:2,name:"Iphone3",price:30000,count:1},
        {id:3,name:"Iphone4",price:40000,count:1}
      ],
      itemcart:[],
      counter: 0,
      name: ""
    }
  }

  bundleAddToCart(e){
    if(this.state.itemcart.find(a => a.name == this.state.itemlist[e.target.value].name)){
      for(let i = 0; i < this.state.itemcart.length; i++){
        if(this.state.itemcart[i].name == this.state.itemlist[e.target.value].name){
          var index = i
          break;
        }
      }
      this.setState({
        itemcart: [
          ...this.state.itemcart, ...this.state.itemcart[index].count = this.state.itemcart[index].count+1, ...this.state.itemcart[index].price = this.state.itemlist[e.target.value].price * this.state.itemcart[index].count
        ],
        counter: this.state.counter += this.state.itemlist[e.target.value].price
      })
      index = 0
    }else {
      this.setState({
        itemcart: [
          ...this.state.itemcart, {
            id: countid++,
            name: this.state.itemlist[e.target.value].name,
            price: this.state.itemlist[e.target.value].price,
            count: this.state.itemlist[e.target.value].count
          }
        ],
        counter: this.state.counter += this.state.itemlist[e.target.value].price
      })
    }
  }

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
              {this.state.itemcart.map((record, index) =>
                  <div id="in-cartlist">
                    <label id="name-item">{record.name}</label>
                    <label>{record.count}</label>
                    <label>{record.price}</label>
                  </div>
              )}
            </div>
          </div>
          <div className="checkoutset">
            <div id="total-content">
              <label>Total Price : </label><label> {this.state.counter} </label>
            </div>
            <div id="button">
              <button className="button button-hover">Checkout</button>
            </div>
          </div>
        </div>
        <div className="flex-wrap">
          {this.state.itemlist.map((record, index) =>
          <div className="flex-item">
            <div className="flex-img">
              img
            </div>
            <div id="content-name">
              <label>
                {record.name}
              </label>
              <label>
                Price : {record.price}
              </label>
            </div>
            <div className="align-butt">
              <button className="but-cart" value={record.id} onClick={this.bundleAddToCart.bind(this)}>
                <Glyphicon glyph="shopping-cart" />
                Add to Cart
              </button>
            </div>
          </div>
          )}
        </div>
      </div>
    );
  }
}
export default Home;
