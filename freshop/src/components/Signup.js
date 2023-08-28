

import React from 'react';
import '../css/Signin.css'

const Signup = (props) => {


  return(
    <div className="login-form">
    <form action="/examples/actions/confirmation.php" method="post">
        <p className="text-center heading">Freshop</p>
        <h2 className="pull-left">Let's Get Started</h2>     
        <p className="pull-left">Enter your Details as metioned on Box.</p>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="User Name" onChange={(e)=>props.userNameChange(e.target.value)}  required="required"/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Mobile Number" onChange={(e)=>props.userMobileNumChange(e.target.value)}  required="required"/>
        </div>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Email" onChange={(e)=>props.userLoginChange(e.target.value)}  required="required"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" onChange={(e)=>props.pwdLoginChange(e.target.value)}  required="required"/>
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Confirm Password" onChange={(e)=>props.cnfPwdLoginChange(e.target.value)} required="required"/>
        </div>
        
        <div className="form-group">
            <input type="text" className="form-control" placeholder="address" onChange={(e)=>props.addressChange(e.target.value)} required="required"/>
        </div>

        <div className="form-group">
            <select onChange={(e)=>props.changeRole(e.target.value)} defaultValue={"customer"}>
              <option id='admin' value={'admin'} >
                admin
              </option>
              <option id="customer" value={'customer'} defaultChecked>
                customer
              </option>
              <option id='Seller' value={'Seller'}>
                Seller
              </option>
            </select>
        </div>
       
        <div className="form-group">
          <label className="pull-left checkbox-inline"><input type="checkbox"/> Accept Terms & Conditions</label>

            <button type="submit" className="btn btn-block btn-cust" onClick={(e)=>props.signUp(e)}>Signup</button>
        </div>
     
    <p className="text-center">Already a Member? <a onClick={()=>props.buy("signin")}>Sign in</a></p>
    </form>
</div>

  )
}

export default Signup;