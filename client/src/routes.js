import React from "react";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import Redirect from "react-router-dom/es/Redirect";
import ForAut from "./pages/ForAut";
import ForReg from "./pages/ForReg";
import ForTabl from "./pages/ForTabl";
import ToolNotAut from "./pages/ToolNotAut";
import ToolAut from "./pages/ToolAut";
import ToolAdmin from "./pages/ToolAdmin";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated=="NotAut") {
        return (
            <Switch>
            <Route path="/Aut" exact>
        <ForAut/>

        </Route>
        <Route path="/Reg" exact>
        <ForReg/>

        </Route>
        <Route path="/" exact>
        <ToolNotAut/>

        </Route>
        <Redirect to="/" />
            </Switch>
    )
    }

    if (isAuthenticated=="Adm") {
        return (
            <Switch>
            <Route path="/Aut" exact>
        <ForAut/>

        </Route>
        <Route path="/Reg" exact>
        <ForReg/>

        </Route>
        <Route path="/" exact>
        <ToolAdmin/>

        </Route>
        <Redirect to="/" />
            </Switch>
    )
    }

    if (isAuthenticated=="Aut") {
        return (
            <Switch>
            <Route path="/Aut" exact>
        <ForAut/>

        </Route>
        <Route path="/Reg" exact>
        <ForReg/>

        </Route>
        <Route path="/" exact>
        <ToolAut/>

        </Route>
        <Redirect to="/" />
            </Switch>
    )
    }


}