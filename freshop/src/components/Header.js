import React from 'react';
const Header = (props) => {
  return(
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="/Shop">{props.title}</a>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li className="active"><a onClick={()=>props.buy("products")}> <i className="glyphicon glyphicon-search icon"></i>Products</a></li>
          {props.user.userId!=null?(<li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-user icon"></span>{props.user.email!==""? props.user.email:"Hello, Sign in"}</a>
            <ul className="dropdown-menu">
              <li align="center" className="well">
                  {props.user.email===""?(<a onClick={()=>props.buy("signin")}><span className="glyphicon glyphicon-user icon"></span>Sign In</a>):''}
                  <a onClick={()=>props.buy("profile")} > Profile</a>
                  <a onClick={()=>props.buy("newOrders")} > Orders</a>
                  {props.user.email!==""?(<a onClick={props.logout} ><span className="glyphicon glyphicon-log-out"></span> Logout</a>):''}
              </li>
              </ul>
            </li>):''}
            
          <li><a onClick={()=>props.buy("checkout")}><i className="fa fa-cart-plus icon"></i>Cart <span>{props.count.length}</span> </a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;