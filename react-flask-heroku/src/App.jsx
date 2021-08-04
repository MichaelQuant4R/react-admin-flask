import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {User as UserAuth} from "./auth/UserContext";
import Topbar from "./admin/Topbar";
import Sidebar from "./admin/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./css/app.css";
import UserList from "./pages/userList/UserList";
import UserPage from "./pages/user/UserPage";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";


const App = props => {
    
    const [user, setUser] = React.useState(null);
    
    const value = React.useMemo(() => ({user, setUser}), [user, setUser]);
    
  return (
    
      <Router>
      <UserAuth.Provider value={value}>
        <Topbar/>
          <div className="container">
          <Sidebar/>
              
          <Switch>
              <Route exact path="/">
              <Home/>
              </Route>
              
              <Route exact path="/users">
              <UserList/>
              </Route>
              
              <Route path="/user/:userId">
              <UserPage/>
              </Route>
              
              <Route path="/newUser">
            <NewUser />
          </Route>
              
           <Route path="/products">
            <ProductList />
          </Route>
              
            <Route path="/product/:productId">
            <Product />
          </Route>
              
                   <Route path="/newproduct">
            <NewProduct />
          </Route>
              
          </Switch>
          </div>
   
      </UserAuth.Provider>
      </Router>
    
  );
}

export default App;
