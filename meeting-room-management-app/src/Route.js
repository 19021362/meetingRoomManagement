import Home from "./pages/home.js";
import Login from "./pages/login.js";
import Signup from "./pages/register.js";
import { Switch, Route } from "react-router-dom";
import Room from "./pages/room.js";
import Schedule from "./pages/schedule.js";
import CreateMeeting from "./pages/createMeeting.js";


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
            <Route exact path="/room">
                <Room />
            </Route>
            <Route exact path="/schedule">
                <Schedule />
            </Route>
            <Route exact path="/createMeeting">
                <CreateMeeting />
            </Route>
        </Switch>
    );
}

