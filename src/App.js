import { createContext, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/Contact';
import Finish from './components/Finish/Finish';
import AboutFood from './components/FooterLink/AboutFood';
import AddRestaurant from './components/FooterLink/AddRestaurant';
import GetHelp from './components/FooterLink/GetHelp';
import Pricing from './components/FooterLink/Pricing';
import PrivacyPolicy from './components/FooterLink/PrivacyPolicy';
import ReadBlog from './components/FooterLink/ReadBlog';
import RestaurantNear from './components/FooterLink/RestaurantNear';
import SignUpDelivery from './components/FooterLink/SignUpDelivery';
import TermUse from './components/FooterLink/TermUse';
import ViewClient from './components/FooterLink/ViewClient';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderDelivery from './components/OrderDelivery/OrderDelivery';
import OrderSummary from './components/OrderSummary/OrderSummary';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Shipment from './components/Shipment/Shipment';
import SingleFood from './components/SingleFood/SingleFood';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>       
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          {/* <Route path="/shipment">
            <Shipment></Shipment>
          </Route> */}
          <Route path="/finish">
            <Finish></Finish>
          </Route>
          
          <Route path="/orderTime">
            <OrderDelivery></OrderDelivery>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/singleFood/:id">
            <SingleFood></SingleFood>
          </Route>
          <Route path="/orderSummary">
            <OrderSummary></OrderSummary>
          </Route>
          <Route path="/aboutFood">
            <AboutFood></AboutFood>
          </Route>
          <Route path="/addRestaurant">
            <AddRestaurant></AddRestaurant>
          </Route>
          <Route path="/getHelp">
            <GetHelp></GetHelp>
          </Route>
          <Route path="/pricing">
            <Pricing></Pricing>
          </Route>
          <Route path="/privacyPolicy">
            <PrivacyPolicy></PrivacyPolicy>
          </Route>
          <Route path="/readBlog">
            <ReadBlog></ReadBlog>
          </Route>
          <Route path="/restaurantNear">
            <RestaurantNear></RestaurantNear>
          </Route>
          <Route path="/signUpDelivery">
            <SignUpDelivery></SignUpDelivery>
          </Route>
          <Route path="/termUse">
            <TermUse></TermUse>
          </Route>
          <Route path="/viewClients">
            <ViewClient></ViewClient>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
