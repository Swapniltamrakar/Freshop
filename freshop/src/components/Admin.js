import React from 'react'
import '../css/admin.css'


const Admin = (props) => {
    return (
        <div className="help-background">
            <div className="jumbotron help-bg">
                <div className="help-text">
                    <div className="help-header">Admin Page</div>
                    {props.userDetail.role === "admin" ? (<div className="help-header-text">Welcome {props.userDetail.userName}@Admin</div>) : ""}

                </div>
            </div>
            {props.userDetail.role === 'admin' && props.userDetail.status === 'varified' ? (
                <div className="container help-container">
                    <div className="row">
                        <div className="col-lg-4 faq-menu">
                            <div className="nav nav-pills faq-nav" id="faq-tabs" role="tablist" aria-orientation="vertical">
                                <a href="#tab1" className="nav-link active" data-toggle="pill" role="tab" aria-controls="tab1" aria-selected="true">
                                    <i className="mdi mdi-help-circle"></i> EMAIL
                                </a>
                                <a href="#tab2" className="nav-link" data-toggle="pill" role="tab" aria-controls="tab2" aria-selected="false">
                                    <i className="mdi mdi-account"></i> USER EMAIL : {props.userDetail.email}
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-8 faq-content">
                            <div className="tab-content" id="faq-tab-content">
                                <div className="tab-pane show active" id="tab1" role="tabpanel" aria-labelledby="tab1">
                                    <div className="accordion" id="accordion-tab-1">
                                        <div className="card">
                                            <h3>Admins</h3>
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#UserId</th>
                                                        <th scope="col">User Name</th>
                                                        <th scope="col">email</th>
                                                        <th scope="col">Mobile Number</th>
                                                        <th scope="col">status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {props.adminUserData.map((item) => (
                                                        <tr>
                                                            <th scope="row">{item.userId}</th>
                                                            <td>{item.userName}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.mobileNumber}</td>
                                                            {item.status === "varified" ? (<td>{item.status}</td>) : (<td>
                                                                <select onChange={(e) => props.userStatus(e.target.value, item)} defaultValue={"pending"}>
                                                                    <option value={"varified"}>
                                                                        varify
                                                                    </option>
                                                                    <option value={"pending"}>
                                                                        pending
                                                                    </option>
                                                                </select>
                                                            </td>)}

                                                        </tr>
                                                    ))}


                                                </tbody>
                                            </table>

                                        </div>
                                        <div className="card">
                                            <h3>Sellers</h3>
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#SiD</th>
                                                        <th scope="col">#Pid</th>
                                                        <th scope="col">Title</th>
                                                        <th scope="col">Description</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {props.allSuppliers.map((item) =>
                                                        <tr>
                                                            <th scope="row">{item.sid}</th>
                                                            <td>{item.pid} {item.supplierLastName}</td>
                                                            <td>{item.title}</td>
                                                            <td>{item.description}</td>
                                                            <td>{item.price}</td>
                                                            <td><select defaultValue={item.price}>
                                                                <option value={"pending"}>pending</option>
                                                                <option value={"varified"}>verified</option>
                                                                </select></td>
                                                        </tr>
                                                    )}


                                                </tbody>
                                            </table>

                                        </div>
                                        <div className="card">

                                            <h3>Products</h3>
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#PID</th>
                                                        <th scope="col">Product</th>
                                                        <th scope="col">Catagory</th>
                                                        <th scope="col">Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {props.filteredProducts.map((item) => (

                                                        <tr>
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


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            ) : ""}

        </div>
    )
}

export default Admin
