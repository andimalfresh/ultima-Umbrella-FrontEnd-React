import React from "react"
import { Link } from "react-router-dom"


const Orderform  = props => {
     const items = props.products.map((prods) => {
        return (
        <div className={`${props.showItems ? '' : 'hidden'}`}>
          <ul className="orderList"> 
              <li className="orderRow">
                  <div className="orderItem">{prods.product_name}</div>
                  <div className="quantityDiv">Qty: 
                      <input name="quantity" className="quantityInput"  value = "3" placeholder="#"/>
                  </div>
              </li>
          </ul>
          </div>
          )})

return (
        <div className="componentContainer">
                Order Form
            <div className="contentDiv">
            <select onChange={props.handleSelected} value={props.value}>
                    <option className="dropOpening" defaultValue disabled selected>Select An Distributor.</option>
            {props.users.map((users) => <option >{users.company_acct_name}</option>)}
            </select>
        {items}
                <div className="buttonRow">
                        <Link to={"/mainpage"}><button className="navButton">Main Page</button></Link>
                        <Link to={"/orderconfirmform"}><button className="navButton">Make Order</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Orderform