import React from 'react'
import '../css/supplier.css'


const Supplier = (props) => {
    return (

        <div className="help-background">
            <div className="jumbotron help-bg">
                <div className="help-text">
                    <div className="help-header">Supplier Page</div>
                    <div className="help-header-text">{props.userDetail.email}.</div>
                </div>
            </div>
            <div className="container help-container">
                <div className="row">
                    <div className="col-lg-4 faq-menu">
                        <div className="nav nav-pills faq-nav" id="faq-tabs" role="tablist" aria-orientation="vertical">
                            <a href="#tab1" className="nav-link active" data-toggle="pill" role="tab" aria-controls="tab1" aria-selected="true">
                                <i className="mdi mdi-help-circle"></i> Supplier Email
                            </a>
                            <a href="#tab2" className="nav-link" data-toggle="pill" role="tab" aria-controls="tab2" aria-selected="false">
                                <i className="mdi mdi-account"></i>{props.userDetail.email}
                            </a>
                        </div>
                    </div>
                    {props.userDetail.role === "Seller" ? (
                        <div className="col-lg-8 faq-content">
                            <div className="tab-content" id="faq-tab-content">
                                <div className="tab-pane show active" id="tab1" role="tabpanel" aria-labelledby="tab1">
                                    <div className="accordion" id="accordion-tab-1">

                                        <div className="card">
                                            <h3>Details</h3>
                                            <table class="table table-dark">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#SID</th>
                                                        <th scope="col">First Name</th>
                                                        <th scope="col">Last Name</th>
                                                        <th scope="col">Licence Num</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">{props.SupplierData.sid}</th>
                                                        <td>{props.SupplierData.supplierFirstName}</td>
                                                        <td>{props.SupplierData.supplierLastName}</td>
                                                        <td>{props.SupplierData.ln}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="card">
                                            <h3>Product Alrady Existing</h3>
                                            <table class="table table-dark">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#PID</th>
                                                        <th scope="col">ITEM</th>
                                                        <th scope="col">CATAGORY</th>
                                                        <th scope="col">PRICE</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {props.products.map((item) => (<tr>
                                                        <th scope="row">{item.pid}</th>
                                                        <td>{item.title}</td>
                                                        <td>{item.catagory}</td>
                                                        <td>{item.price}</td>
                                                    </tr>
                                                    ))}


                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="card">
                                            <h3>Add New Product</h3>
                                            <div className='form-group'>
                                            <table class="table table-dark">
                                                <tbody>
                                                    <tr>
                                                        <td scope="row"><label>Sid</label><td></td><input type='number'value={props.userDetail.userId} readOnly></input></td>
                                                    </tr><tr>
                                                        <td><label>PID</label><td></td><input type='number' min={props.products.length} value={props.products.length+1} onChange={(e)=>{props.changePid(e.target.value)}}></input></td>
                                                    </tr><tr>
                                                        <td><label>title</label><td></td><input type='text' onChange={(e)=>{props.changeTitle(e.target.value)}}></input></td>
                                                    </tr><tr>
                                                        <td><label>description</label><td></td><input type='text' onChange={(e)=>{props.changeDescription(e.target.value)}}></input></td>
                                                    </tr><tr>
                                                        <td><label>src</label><td></td><input type='text' onChange={(e)=>{props.changeSrc(e.target.value)}}></input></td>
                                                    </tr><tr>
                                                        <td><label>price</label><td></td><input type='text' onChange={(e)=>{props.changePrice(e.target.value)}}></input></td>
                                                    </tr><tr>
                                                        <td><label>catagory</label><td></td><input type='text' onChange={(e)=>{props.changeCatagory(e.target.value)}}></input></td>
                                                    </tr>
                                                    <tr>
                                                        <td><button type='submit' onClick={(e)=>{props.addProduct(e)}}>Add product</button></td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ) : ""}

                </div>
            </div>
        </div>
    )
}

export default Supplier
