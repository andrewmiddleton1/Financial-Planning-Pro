import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/pages/Landing/Landing";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Other from "./components/pages/Other/Other";
import Profile from "./components/Profile/Profile";
import ClientAssetsPage from "./components/pages/ClientAssetsPage/ClientAssetsPage";
import ClientIncomePage from "./components/pages/ClientIncomePage/ClientIncomePage";
import ClientLiabilitiesPage from "./components/pages/ClientLiabilitiesPage/ClientLiabilitiesPage";
import ClientParticularsPage from "./components/pages/ClientParticularsPage/ClientParticularsPage";
import ClientExpensesPage from "./components/pages/ClientExpensesPage/ClientExpensesPage";
import PlannerInfoPage from "./components/pages/PlannerInfoPage/PlannerInfoPage";
import CreateROAPage from "./components/pages/CreateROAPage/CreateROAPage";
import Auth from "./Auth";


import { AppContextProvider } from './store';

import "./App.css";

import StartUp from './components/pages/StartUp/StartUp';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

    return (
        <AppContextProvider>
            <Router>
                <div className="container-fluid pl-0 pr-0 m-0">
                    <Navbar />
                    <Route exact path="/" component={Landing} />
                    <div className='container-fluid m-0 p-0'>
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/profile" component={Profile} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/other" component={Other} />
                        <Route exact path="/startUp" component={StartUp} />
                        <Route exact path="/clientassets" component={ClientAssetsPage} />
                        <Route exact path="/clientliabilities" component={ClientLiabilitiesPage} />
                        <Route exact path="/clientincome" component={ClientIncomePage} />
                        <Route exact path="/clientparticulars" component={ClientParticularsPage} />
                        <Route exact path="/clientexpenses" component={ClientExpensesPage} />
                        {/* <Route exact path="/plannerinfo" component={PlannerInfoPage} /> */}
                        <Route exact path="/plannerinfo" component={Auth(PlannerInfoPage, ["planner"])} />
                        <Route exact path="/createroa" component={CreateROAPage} />

                    </div>
                </div>
            </Router>
        </AppContextProvider>
    );

}
export default App;

