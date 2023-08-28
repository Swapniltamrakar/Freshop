import React from 'react'
import '../css/carosel.css'

function Carosel(props) {
    return (
        <div className="container-fluid" >
                <div id="myCarousel" className="carousel slide carousel-bg" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">

                        <div className="item">
                            
                            <div className="carousel-caption">
                            <h3>Fruits</h3><img src={require("../components/images/5243790-apples-c-rex.jpg")} height={300} width={300} className="pull-right" alt="kashmiri apple" />
                            <p>Fruits delivered directly from farmers!</p>
                          <button type="submit" className="btn btn-cust" onClick={()=>props.buy("products")} >Buy</button>

                            
                            </div>
                        </div>

                        <div className="item active">
                            <img src={require("../components/images/slider2.png")} className="pull-right" alt="Veggies"/>
                            <div className="carousel-caption">
                            <h3>Vegetables</h3>
                            <p>Fresh from the farm and Hygenic!</p>
                          <button type="submit" className="btn btn-cust" onClick={()=>props.buy("products")} >Buy</button>
                            </div>
                        </div>
            
                    </div>

                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                     </a>
                     <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                     </a>
            </div>
   </div>
    )
}

export default Carosel
