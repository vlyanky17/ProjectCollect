import React from "react";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";

import Redirect from "react-router-dom/es/Redirect";

import ForAut from "./pages/ForAut";
import ForTabl from "./pages/ForTabl";

import ForReg from "./pages/ForReg";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
            <Route path="/tabl" exact>
        <ForTabl/>

        </Route>
        <Redirect to="/tabl" />
            </Switch>
    )
    }



        return (
            <Switch>
            <Route path="/" exact>
<ForAut/>

            </Route>
    <Route path="/Reg" exact>
    <ForReg/>

    </Route>
    <Redirect to="/" />
        </Switch>
    )
}