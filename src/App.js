import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import AddServices from "./components/Admin/AddServices/AddServices";
import Admin from "./components/Admin/Admin/Admin";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import ManageServices from "./components/Admin/ManageServices/ManageServices";
import CheckOut from "./components/Customer/CheckOut/CheckOut";
import Customer from "./components/Customer/Customer/Customer";
import Review from "./components/Customer/Review/Review";
import ServicesList from "./components/Customer/ServicesList/ServicesList";
import Home from './components/Home/Home/Home';
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Shared/Login/Login";



export const UserContext = createContext();
function App() {
  const [loginUser, setLoginUser] = useState({})
  
  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
    <Router>
      <Switch>
          <Route path="/home">
          <Home/>
          </Route>
          <Route path="/admin">
          <Admin/>
          </Route>
          <Route path="/login">
          <Login/>
          </Route>
          <Route path="/addServices">
          <AddServices/>
          </Route>
          <Route path="/makeAdmin">
          <MakeAdmin/>
          </Route> 
          <Route path="/manageServices">
          <ManageServices/>
          </Route> 

          <Route path="/customer">
          <Customer/>
          </Route>
          <Route path="/servicesList">
          <ServicesList/>
          </Route>
          <Route path="/checkOut">
          <CheckOut user={loginUser}/>
          </Route>
          <Route path="/review">
          <Review user={loginUser}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
