import React from 'react'

function Values() {
    return (
        
    <div className="container values">
        <div className="row text-center">
            <div className="col-md-4">
            <img className="img-circle img-responsive img-center values-img" src={require("../components/images/farmernew.jpg")} alt="Farmer Value"/>
            <h2>Benefits for Farmers</h2>
            <p>Farmers will get <b>30% More Revenue</b> and <b>One Stop Sale</b> with <b>Garuntteed payments</b> in 24 hours.</p>
            </div>
            <div className="col-md-4">
            <img className="img-circle img-responsive img-center values-img" src={require("./images/conven.jpeg")}/>
            <h2>Convenient for Retailers</h2>
            <p>Retailers are Convenient with <b>Competitive pricing</b> and <b>Door Delivery</b> and also it Saves their <b>Time</b> </p>
            </div>
            <div className="col-md-4">
            <img className="img-circle img-responsive img-center values-img" src={require("./images/savings.png")}/>
            <h2>Savings for Consumers</h2>
            <p>Consumers are happy with <b>Pricing and Hygenic </b> and <b>Delivered Directly from Farm</b></p>
            </div>
        </div>
    </div>
    )
}

export default Values
