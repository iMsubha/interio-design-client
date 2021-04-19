import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddServices from "./components/Admin/AddServices/AddServices";
import Admin from "./components/Admin/Admin/Admin";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import ManageServices from "./components/Admin/ManageServices/ManageServices";
import CheckOut from "./components/Customer/CheckOut/CheckOut";
import Customer from "./components/Customer/Customer/Customer";
import Review from "./components/Customer/Review/Review";
import ServicesList from "./components/Customer/ServicesList/ServicesList";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Shared/Login/Login";
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loginUser, setLoginUser] = useState({});

  return (
    <UserContext.Provider value={[loginUser, setLoginUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/addServices">
            <AddServices />
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute path="/manageServices">
            <ManageServices />
          </PrivateRoute>

          <PrivateRoute path="/customer">
            <Customer />
          </PrivateRoute>
          <PrivateRoute path="/servicesList">
            <ServicesList />
          </PrivateRoute>
          <PrivateRoute path="/checkOut">
            <CheckOut user={loginUser} />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review user={loginUser} />
          </PrivateRoute>
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
