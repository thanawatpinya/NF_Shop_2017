import React, {Component} from 'react';
import './Csshome.css'
import img1 from './img/1.jpeg'
import { Glyphicon, Button, Table } from 'react-bootstrap';
import {DeleteAmount} from './DeleteAmount';
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
      name: "",
      changecount:0,
      toggleDelete: false,
      tempName:"",
      tempCount: 0,
      tempID: 0,
      totalAmount: 0
    }
  }

  checkItem(path, set) {
    switch (set) {
      case "cart":
        for(let i = 0; i < this.state.itemcart.length; i++){
          if(this.state.itemcart[i].name == this.state.itemlist[path].name){
            return i
          }
        }
      case "count":
        for(let i = 0; i < this.state.itemlist.length; i++){
          if(this.state.itemcart[path].name == this.state.itemlist[i].name){
            return i
          }
        }
      default:
        return 0
    }
  }

  handleAddToCart(e) {
      let path = e.target.value
      let basePrice = this.state.itemlist[path].price
      if(this.state.itemcart.find(a => a.name == this.state.itemlist[path].name)) {
        let index = this.checkItem(path, "cart")
        let amout = this.state.itemcart[index].count
        this.setState({
          itemcart: [
            ...this.state.itemcart,
            ...this.state.itemcart[index].count = amout + 1,
            ...this.state.itemcart[index].price = basePrice * this.state.itemcart[index].count
          ],
          counter: this.state.counter = this.handleTotalPrice()
        })
      } else {
        this.setState({
          itemcart: [
            ...this.state.itemcart, {
              id: countid++,
              name: this.state.itemlist[path].name,
              price: this.state.itemlist[path].price,
              count: this.state.itemlist[path].count
            }
          ],
          counter: this.state.counter += this.state.itemlist[path].price
        })
      }
  }

  handleChangecount(e) {
    let path = e.target.id
    let index = this.checkItem(path, "count")
    if(this.state.itemcart.find(a => a.name == this.state.itemlist[index].name)) {
      let basePrice = this.state.itemlist[index].price
      let input = parseInt(e.target.value)
      itemcart: [
        ...this.state.itemcart,
        ...this.state.itemcart[path].count = input,
        ...this.state.itemcart[path].price = basePrice * this.state.itemcart[path].count
      ]
      counter: this.state.counter = this.handleTotalPrice()
      this.setState( {} )
    }
  }

  handleUpdateCart(id){
    let item2 = this.state.itemcart.filter(item => item.id === id)
    this.setState({itemcart: this.state.itemcart.filter(item=>item.id!==id),
                   toggleDelete: false,
                   counter: this.state.counter -= item2[0].price})
  }

  handleDelete(bool){
    this.setState({toggleDelete: bool})
  }

  handleSendData(name,count,id){
    this.setState({tempName: name,
                   tempCount: count,
                   tempID: id})
  }

  handleShowModal(bool,name,count,id){
    this.handleDelete(bool)
    this.handleSendData(name,count,id)
  }

  handleTotalPrice() {
    let sum = 0
    for (let i = 0; i < this.state.itemcart.length; i++) {
      sum += this.state.itemcart[i].price
    }
    return sum
  }

  // componentDidMount() {
  //   fetch('http://localhost:27017/api/Shoplist')
  //   .then(response => response.json())
  //   .then(json => this.setState({ itemlist: json }))
  // }
  //
  // handleCheckout() {
  //   fetch('http://localhost:27017/api/Insertlist', {
  //     method: 'POST',
  //     headers: {'Content-Type':'application/json'},
  //     body : JSON.stringify({
  //       bills: this.state.itemcart
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(function(body) { console.log(body) })
  //   this.setState ({ itemcart : [] })
  // }

  render() {
    return (
      <div className="flex-container">
        <div className="sidebar-col" id="sidebar">
          <div>
            <div id="cart-div">
              <label id="cartfont" className="set-text-white">Cart</label>
            </div>
            <hr className="hrwidth"/>
            <Table>
              <thead>
                <tr>
                  <th className="cartlist">Product Name</th>
                  <th className="cartlist">Amount</th>
                  <th className="cartlist">Price</th>
                  <th className="fixWidth" />
                </tr>
              </thead>
              <tbody>
                  {this.state.itemcart.map((record, index) =>
                      <tr>
                        <td className="content-style"><label>{record.name}</label></td>
                        <td className="content-style">
                          <input className="setinput"
                                 id={index} type="number"
                                 min="1" value={record.count}
                                 onChange={this.handleChangecount.bind(this)}/></td>
                        <td className="content-style"><label>{record.price}</label></td>
                        <td className="content-style">
                          <button onClick={this.handleShowModal.bind(this, true,record.name,record.count,record.id)}
                                     className="but-delete">
                                     <Glyphicon glyph="trash"/>
                          </button></td>
                        </tr>
                  )}
              </tbody>
            </Table>
          </div>
          <div className="checkoutset">
            { this.state.toggleDelete ?
            <DeleteAmount handleDelete={this.handleDelete.bind(this)}
                          handleUpdateCart={this.handleUpdateCart.bind(this)}
                          amount={this.state.tempCount}
                          name={this.state.tempName}
                          id={this.state.tempID}/> :
            null}
            <div id="total-content">
              <label>Total Price : </label><label>
                {this.state.counter}
              </label>
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
              <img src={img1} height="200px"></img>
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
              <button className="but-cart" value={record.id} onClick={this.handleAddToCart.bind(this)}>
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
