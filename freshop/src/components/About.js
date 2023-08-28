import React from 'react'
import '../css/about.css';

function About() {
    return (
        <div id="about" className="container about">
        <div className="row">
            <div className="col-sm-4">
            <div className="about-heading"><h2>About Us</h2></div>
            <div className="about-content"><h4>Freshop is an app for delivering fresh veggies and fruits. We are here to solve the problem of farmers as well as customers who are Suffering due to middle persons.</h4>
            <p>We collect Fresh Vegetables and Fruits from Farmers Directly and delivery to customers and small businesses.</p></div>
            <button className="btn btn-cust about-btn">Get in Touch</button>
            </div>
            <div className="col-sm-8">
            <ul className="timeline">

	<li>
		<div className="direction-r">
		<span><img src={require("./images/delivery chart.jpg")} width={300} height={300} alt="Farmers"/></span>
			
		</div>
	</li>
  
</ul>


            </div>
        </div>
        </div>
    )
}

export default About
