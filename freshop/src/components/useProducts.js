import { useState, useEffect } from 'react';
import History from './History';
import axios from 'axios';


export default () => {
    const [addUser, setAddUser] = useState({ address: "", email: "", mobileNumber: "", password: "", role: "", userName: "", status: "" });
    const [role, setRole] = useState("");
    const [mobileNum, setMobileNum] = useState("");
    const [userDetails, setUserDetails] = useState({});
    const [pid,setPid] = useState();
    const [description,setDescription] = useState("");
    const [title,setTitel] = useState("");
    const [catagory,setCatagory] = useState("")
    const [src,setSrc] = useState("");
    const [price,setPrice]=useState();
    const [useName, setUserName] = useState("");
    const [newUser, setNewUser] = useState({ email: "", password: "" });
    const [address, setAddress] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [search, setSearch] = useState("");
    const [usrLogin, setUsr_Login] = useState("");
    const [pwdLogin, setPwd_Login] = useState("");
    const [cnfPwdLogin, setCnfPwd_Login] = useState("");
    const [licence, setLicence] = useState("");
    const [guestCart, setGuestCart] = useState([]);
    const [user, setUser] = useState({ userId: 0, email: "" });
    const [isStatusChange, setIsStatusChange] = useState(false);
    const [orders, setOrders] = useState([]);
    const [env] = useState('sandbox');
    const [isSupplier, setIsSupplier] = useState(false);
    const [adminUser, setAdminUser] = useState([]);
    const [currency] = useState('USD');
    const [supplerAdded, setSupplierAdded] = useState(false);
    const [updatableUser, setUpdatableUser] = useState({});
    const [userStatus, setUserStatus] = useState({ status: "pending" });
    const [newProduct, setNewProduct] = useState({});
    const [SupplierData, setSupplierData] = useState({});
    const [allSuppliers, setAllSuppliers] = useState([]);
    const [lastName, setLastName] = useState("");
    const [client] = useState({
        sandbox: 'ATKphVPUKrAFnWXr042hYQsynmg9U_UUeudlf1RjYkyKf3rsf5s3IE-H1QZWn8ziKEZzq5WH4TRalZR_',
        production: 'YOUR-PRODUCTION-APP-ID',
    })






    //Products
    useEffect(() => {

        axios.get("http://localhost:8080/Products").then(
            (resp) => {
                setProducts(resp.data)
                setfilteredProducts(resp.data)
            }

        ).catch((e) => { console.log(e) })
    }, []);


    useEffect(() => {

        axios.get("http://localhost:8080/Roles").then((resp) => {
            setAdminUser(resp.data);
        }).catch((e) => { console.log(e) })

    }, []);

    useEffect(() => {

        axios.get("http://localhost:8080/SuppliedProduct").then((resp) => {
            if (resp) {
                setAllSuppliers(resp.data);
            }
        }).catch((e) => { console.log(e) });

    }, []);

    useEffect(() => {

        let newUserData = localStorage.getItem("user");
        if (newUserData != null) {
            //alert("here")
            const setData = JSON.parse(newUserData);
            setUser({ userId: setData.userId, email: setData.email })
            setUserDetails({ userId: setData.userId, email: setData.email, userName: setData.userName, role: setData.role, address: setData.address, status: setData.status })
            let newCart = localStorage.getItem(setData.userId + "cart");
            if (newCart != null) {
                const setCart = JSON.parse(newCart);
                setCartItems(setCart);
            }
            if (userDetails.role === "Seller") {
                let supplierNewData = localStorage.getItem("supplier" + userDetails.userId);
                if (supplierNewData != null) {
                    const setNewSup = JSON.parse(supplierNewData);
                    setSupplierData({ sid: setNewSup.sid, address: setNewSup.address, ln: setNewSup.ln, supplierFirstName: setNewSup.supplierFirstName, supplierLastName: setNewSup.supplierLastName, status: setNewSup.status });
                }

            }
        }
    }, [isStatusChange])


    useEffect(() => {

        if (userDetails.role === "Seller") {
            if (SupplierData.sid != undefined) {
                History.push("/Shop/Supplier")
            } else {
                History.push("/Shop/SupplierLogin")
            }
        }

    }, [isSupplier, SupplierData])

    //Search 
    useEffect(() => {
        setfilteredProducts(
            [...products].filter(product => {
                return product.title.toLowerCase().includes(search.toLowerCase());
            })
        )
        return () => {

        };
    }, [search, products])

    useEffect(() => {
        if (role === "customer") {
            setAddUser({ ...addUser, role: role, status: "varified" })
        } else if (role === "admin") {
            setAddUser({ ...addUser, role: role, status: "pending" })
        } else if (role === "Seller") {
            setAddUser({ ...addUser, role: role, status: "pending" })
        }

    }, [role])

    useEffect(() => {

        if (user.email === null) {
            setGuestCart(cartItems)
        }
    }, [cartItems, user.email])

    useEffect(() => {
        if (updatableUser.userId !== 0) {
            axios.put("http://localhost:8080/UpdateUser", updatableUser).then((val) => { console.log(val) }).catch((e) => { console.log(e) });
        }
    }, [userStatus])

    useEffect(() => {
        if (userDetails.role === "Seller") {
            History.push("/Shop/Supplier");
        }
    }, [supplerAdded])


    useEffect(() => {

        const cartItem = cartItems;
        // cartItem.map((data)=>alert(data.title))
        let productAlreadyInCart = false;
        if (newProduct.pid != undefined) {
            cartItem.forEach(item => {
                if (item.pid === newProduct.pid) {
                    productAlreadyInCart = true;
                    item.count++;
                }
            })
            if (!productAlreadyInCart) {
                cartItem.push({ ...newProduct, count: 1 })
            }
            setCartItems([...cartItem])
            if (user.userId != 0) {
                localStorage.setItem(user.userId + "cart", JSON.stringify(cartItem));
            }
        }
    }, [newProduct])


    let resultFilter = (temp1, temp2) => {
        return temp1.filter(temp1 =>
            !temp2.some(
                temp2 => temp1.id === temp2.id
            )
        );
    };


    return {
        allSuppliers: allSuppliers,
        filteredProducts: filteredProducts,
        cartItems: cartItems,
        search: search,
        orders: orders,
        env: env,
        currency: currency,
        client: client,
        userDetail: userDetails,
        adminUserData: adminUser,
        SupplierData: SupplierData,

        changeLastName: (value) => {
            setLastName(value);
        },
        changeLicence: (value) => {
            setLicence(value);
        },

        changePid:(value)=>{
            setPid(value);
        },

        changeTitle:(value)=>{
            setTitel(value);
        },

        changeDescription:(value)=>{
            setDescription(value);
        },

        changeCatagory:(value)=>{
            setCatagory(value);
        },

        changePrice:(value)=>{
            setPrice(value);
        },
        
        changeSrc:(value)=>{
            setSrc(value);
        },

        addProduct:(e)=>{

            let newProd = {sid:userDetails.userId,pid:pid,title:title,description:description,catagory:catagory,src:src,price:price,status:"pendingF"};
            axios.post("http://localhost:8080/AddSuppliedProduct",newProd).then((resp)=>{
                if(resp){
                    alert("product added successfully");
                }
            }).catch((e)=>{console.log(e)})

        },


        finalCheckout:(e)=>{
            e.preventDefault();
            
            cartItems.map((item)=>{
                let cartData = {orderId:"AX"+userDetails.userId+"Ab",title:item.title,amount:item.price,price:item.price};
                axios.post("http://localhost:8080/AddOrder",cartData).then((resp)=>{
                    if(resp){
                        alert("order successful");
                        localStorage.removeItem("supplier" + userDetails.userId);
                    }
                })

            })
           
        },


        onAddCart: (product) => {

            setNewProduct(product);
        },
        handleSearch: (value) => {
            setSearch(value);
        },

        handleChangeSort: (sort) => {
            if (sort !== '') {
                const updated = [...products].sort((a, b) => {
                    return (sort === "lowest") ? (a.price > b.price ? 1 : -1) : (a.price < b.price ? 1 : -1);
                });
                setfilteredProducts(updated);
            }
            else {
                const updated = [...products].sort((a, b) => { return (a.id < b.id ? 1 : -1) });
                setfilteredProducts(updated);
            }
        },

        onRemoveCart: (removeItem) => {
            const update = [...cartItems].filter(item => {
                if (item.pid === removeItem.pid && removeItem.count <= 1)

                    return false;
                else {
                    if (item.pid === removeItem.pid && removeItem.count > 1)
                        item.count--;
                    return true;
                }
            });
            setCartItems(update);

        },

        addSupplier: (e) => {
            e.preventDefault();
            let newSupplier = { sid: userDetails.userId, address: userDetails.address, ln: licence, status: "pending", supplierFirstName: userDetails.userName, supplierLastName: lastName };
            axios.post("http://localhost:8080/AddSupplier", newSupplier).then((resp) => {
                if (resp) {
                    setSupplierAdded(true);
                }
            }).catch((e) => { console.log(e) });
        },

        userStatus: (value, item) => {

            // alert(item.userName)
            setUserStatus({ status: value })
            setUpdatableUser(item)
        },


        changeRole: (value) => {

            setRole(value);
        },


        userMobileNumChange: (value) => {
            setMobileNum(value);
            setAddUser({ ...addUser, mobileNumber: value })
        },

        userNameChange: (value) => {
            setUserName(value);
            setAddUser({ ...addUser, userName: value })
        },

        userLoginChange: (value) => {
            setUsr_Login(value);
            setNewUser({ ...newUser, email: value })
            setAddUser({ ...addUser, email: value })
        },

        pwdLoginChange: (value) => {
            setPwd_Login(value);
            setNewUser({ ...newUser, password: value })
            setAddUser({ ...addUser, password: value })
        },

        cnfPwdLoginChange: (value) => {
            setCnfPwd_Login(value)
        },
        buy: (value) => {
            History.push('/Shop/' + value);
        },
        addressChange: (value) => {
            setAddress(value);
            setAddUser({ ...addUser, address: value })
        },
        login: (e) => {
            e.preventDefault();
            console.log(newUser)
            axios.post("http://localhost:8080/Login", newUser).then((resp) => {

                if (resp) {

                    if (resp.data.email === usrLogin && resp.data.password === pwdLogin) {
                        // alert(resp.data.userId)
                        setUser({ userId: resp.data.userId, email: resp.data.email })
                        localStorage.setItem("user", JSON.stringify(resp.data));
                        // alert(user.userId)
                        setIsStatusChange(!isStatusChange);
                        setUserDetails(resp.data);
                        if (resp.data.role === "customer") {
                            History.push("/Shop")
                        }
                        else if (resp.data.role === "admin") {
                            History.push("/Shop/admin")
                        } else if (resp.data.role === "Seller") {


                            let idSet = { sid: resp.data.userId };
                            // alert(idSet.sid)
                            axios.post("http://localhost:8080/findSupplier", idSet).then((resp) => {
                                if (resp) {
                                    setSupplierData(resp.data);
                                    localStorage.setItem("supplier" + resp.data.sid, resp.data);
                                }
                            }).catch((e) => { console.log(e) })

                            setIsSupplier(true);
                        }

                    } else {
                        History.push("/Login")
                    }
                }
            }).catch((e) => { console.log(e) })
        },

        signUp: (e) => {
            e.preventDefault();
            if (pwdLogin === cnfPwdLogin) {
                if (usrLogin !== null) {
                    axios.post("http://localhost:8080/SignUp", addUser).then((res) => {
                        if (res) {
                            History.push('/Shop/products')
                            setUser({ ...user, email: usrLogin })
                        }
                    })
                        .catch((err) => {
                            console.log(err)
                        })
                }
                else {
                    History.push('/Shop/Login')
                }
            }
            else {
                alert("pwd not match");
            }
        },

        logout: () => {
            setUser({});
            setCartItems([]);
            localStorage.removeItem("user");
            setIsStatusChange(!isStatusChange);
        },
        user: user,
        transcationSuccess: (data, cartItem) => {

        },
        transcationError: () => {
            console.log("transaction failed");
        },
        transcationCancelled: () => {
            console.log("transaction cancelled")
        },
        onCheckout: (e) => {
            History.push("/Shop/checkout");
        }



    }

}