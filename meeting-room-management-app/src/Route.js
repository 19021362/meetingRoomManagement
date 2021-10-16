import Home from "./pages/home.js";
import Login from "./pages/login.js";
import Signup from "./pages/register.js";
import { Switch, Route } from "react-router-dom";


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/signup">
                <Signup />
            </Route>
        </Switch>
    );
}

