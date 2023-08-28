import React from 'react'
import '../css/supplierLogin.css'


const SupplierLogin = (props) => {
    return (
        <div className="help-background">
            <div className="jumbotron help-bg">
                <div className="help-text">
                    <div className="help-header">Supplier Registration</div>
                    <div className="help-header-text">Please enter your details.</div>
                </div>
            </div>
            <div className="container help-container">
                <div className="row">
                    <div className="col-lg-4 faq-menu">
                        <div className="nav nav-pills faq-nav" id="faq-tabs" role="tablist" aria-orientation="vertical">
                            <a href="#tab1" className="nav-link active" data-toggle="pill" role="tab" aria-controls="tab1" aria-selected="true">
                                <i className="mdi mdi-help-circle"></i> email
                            </a>
                            <a href="#tab2" className="nav-link" data-toggle="pill" role="tab" aria-controls="tab2" aria-selected="false">
                                <i className="mdi mdi-account"></i> {props.userDetail.email}
                            </a>
                        </div>
                    </div>
                    {props.userDetail.role === "Seller" ? (<div className="col-lg-8 faq-content">
                        <div className="tab-content" id="faq-tab-content">
                            <div className="tab-pane show active" id="tab1" role="tabpanel" aria-labelledby="tab1">
                                <div className="accordion" id="accordion-tab-1">

                                    <div className="card">
                                        <div className="form-group">
                                            <input type="number" className="form-control" placeholder="Supplier id" required="required" value={props.userDetail.userId} readOnly />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="First Name" required="required" value={props.userDetail.userName} readOnly />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Last Name" required="required" onChange={(e) => { props.changeLastName(e.target.value) }} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Address" required="required" value={props.userDetail.address} readOnly />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Licence Number" required="required" onChange={(e) => { props.changeLicence(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="form-group">


                                            <button type="submit" className="btn btn-block btn-cust" onClick={(e) => { props.addSupplier(e) }}>Register</button>
                                        </div>
                                    </div>
                                    <div className="card">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : ""}

                </div>
            </div>
        </div>
    )
}

export default SupplierLogin
