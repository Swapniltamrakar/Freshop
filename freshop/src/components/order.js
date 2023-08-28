import React from 'react'
import '../css/order.css'


const Order = (props) => {
    return (<div>
        <div class="head">
            <h1>Past Orders</h1>
        </div>
        <div class="card">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Order Id</th>
                        <th scope="col">Item</th>
                        <th scope="col">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Tomato</td>
                        <td>150</td>
                       
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default Order
