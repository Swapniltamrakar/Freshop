import React, { Fragment } from 'react';
import '../css/App.css';
import Admin from './Admin';
import Header from './Header';
import Footer from './Footer';
import Signin from './Signin';
import Signup from './Signup';
import Products from './Products';
import { Router, Route, Switch } from 'react-router-dom';
import useProducts from './useProducts';
import Homepage from './Homepage';
import History from './History'
import Checkout from './Checkout';
import OrderConfirmation from './OrderConfirmation';
import GetProfile from './GetProfile';
import Order from './order';
import SupplierLogin from './SupplierLogin';
import Supplier from './Supplier';
function App() {

  const { filteredProducts,finalCheckout,addProduct,changeCatagory,changeDescription,changePid,changePrice,changeSrc,changeTitle,allSuppliers,changeLastName,SupplierData,addSupplier,changeLicence,userStatus,adminUserData, cartItems, onAddCart, userDetail, onRemoveCart, handleChangeSort, handleSearch, search, userLoginChange, pwdLoginChange, login, signUp, cnfPwdLoginChange, user, logout, onCheckout, orders, buy, userNameChange, userMobileNumChange, addressChange, changeRole } = useProducts();

  return (
    <Fragment>
      <Router history={History} >
        <Header title="Freshop" count={cartItems} user={user} logout={logout} buy={buy} />
        <Switch>
          <Route path="/" exact render={() => < Homepage buy={buy} />} />
          <Route path="/Shop" exact render={() => < Homepage buy={buy} />} />
          <Route path="/Shop/profile" render={() => <GetProfile user={user} userDetail={userDetail} />} />
          <Route path="/Shop/Supplier" render={()=> <Supplier addProduct={addProduct} changeCatagory={changeCatagory} changePid={changePid} changeDescription={changeDescription} changePrice={changePrice} changeSrc={changeSrc} changeTitle={changeTitle} userDetail={userDetail} products={filteredProducts} SupplierData={SupplierData}/>} />
          <Route path="/Shop/SupplierLogin" render={()=> <SupplierLogin addSupplier={addSupplier} userDetail={userDetail} changeLastName={changeLastName} changeLicence={changeLicence}/>} />
          <Route path="/Shop/admin" render={()=> <Admin allSuppliers={allSuppliers} userDetail={userDetail} userStatus={userStatus} filteredProducts={filteredProducts} adminUserData={adminUserData}/>} />
          <Route path="/Shop/signup" render={() => < Signup userLoginChange={userLoginChange} pwdLoginChange={pwdLoginChange} cnfPwdLoginChange={cnfPwdLoginChange} userNameChange={userNameChange} userMobileNumChange={userMobileNumChange} addressChange={addressChange} changeRole={changeRole} signUp={signUp} buy={buy} />} />
          <Route path="/Shop/signin" render={() => <Signin userLoginChange={userLoginChange} pwdLoginChange={pwdLoginChange} login={login} buy={buy} />} />
          <Route path="/Shop/products" render={() => <Products products={filteredProducts} cartItems={cartItems} onAddCart={onAddCart} onRemoveCart={onRemoveCart} handleChangeSort={handleChangeSort} handleSearch={handleSearch} search={search} onCheckout={onCheckout} />} />
          <Route path="/Shop/checkout" render={() => <Checkout finalCheckout={finalCheckout} cartItems={cartItems} onAddCart={onAddCart} onRemoveCart={onRemoveCart} />} />
          <Route path="/Shop/orderConfirmation" render={() => <OrderConfirmation />} />
          <Route Path="/Shop/orders" render={() => <Order orders={orders} />} />
          
        </Switch>

        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
