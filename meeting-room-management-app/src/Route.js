import Home from "./pages/home.js";
import Login from "./pages/login.js";
import { Switch, Route } from "react-router-dom";
import Room from "./pages/room.js";
import Schedule from "./pages/schedule.js";
import CreateMeeting from "./pages/createMeeting.js";
import Profile from "./pages/userProfile.js";


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route exact path="/">
                <Login />
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
            <Route exact path="/profile">
                <Profile />
            </Route>
        </Switch>
    );
}

