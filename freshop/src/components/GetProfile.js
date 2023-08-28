import React from 'react'
import '../css/getProfile.css'


const GetProfile = (props) => {
    return (

        <div className="help-background">
            <div className="jumbotron help-bg">
                <div className="help-text">
                    <div className="help-header">Profile</div>
                    <div className="help-header-text">{props.user.email}</div>
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
                                <i className="mdi mdi-account"></i>{props.user.email}
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-8 faq-content">
                        <div className="tab-content" id="faq-tab-content">
                            <div className="tab-pane show active" id="tab1" role="tabpanel" aria-labelledby="tab1">
                                <div className="accordion" id="accordion-tab-1">
                                    <div className="card">
                                        <div className="card-header" id="accordion-tab-1-heading-1">
                                            <h5>
                                                <button className="btn btn-link faq-content-link" type="button" data-toggle="collapse" data-target="#accordion-tab-1-content-1" aria-expanded="false" aria-controls="accordion-tab-1-content-1">Details</button>
                                            </h5>
                                        </div>
                                        <div className="collapse show" id="accordion-tab-1-content-1" aria-labelledby="accordion-tab-1-heading-1" data-parent="#accordion-tab-1">
                                            {props.user.userId > 0 ? (<div className="card-body">
                                                <p>User Id : {props.user.userId}</p>
                                            </div>) : (<div className="card-body">
                                                <p>User Id :</p>
                                            </div>)}

                                            <div className="card-body">
                                                <p>User Name : {props.userDetail.userName}</p>
                                            </div>
                                            <div className="card-body">
                                                <p>User Role : {props.userDetail.role}</p>
                                            </div>
                                            <div className="card-body">
                                                <p>User address : {props.userDetail.address}</p>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetProfile
