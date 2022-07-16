import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import AdminHomePage from "../pages/Admin/AdminHomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage/ApplicationFormPage";
import ListTripsPage from "../pages/ListTripsPage";
import LoginPage from "../pages/Login/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";
import CreateTripPage from "../pages/TripPage/CreateTripPage"

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/trips/list" component={ListTripsPage}/>
                <Route exact path="/trips/application" component={ApplicationFormPage}/>
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/admin/trips/list" component={AdminHomePage} />
                <Route exact path="/admin/trips/create" component={CreateTripPage}/>
                <Route exact path="/admin/trips/:id" component={TripDetailsPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;