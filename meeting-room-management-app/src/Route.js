import Home from "./pages/home.js";
import Login from "./pages/login.js";
import { Switch, Route } from "react-router-dom";
import Room from "./pages/room.js";
import Schedule from "./pages/schedule.js";
import CreateMeeting from "./pages/createMeeting.js";
import Profile from "./pages/userProfile.js";
import Header from './components/header.js';


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Header />
                <Home />
            </Route>
            <Route exact path="/login">
                <Header />
                <Login />
            </Route>
            <Route exact path="/room">
                <Header />
                <Room />
            </Route>
            <Route exact path="/schedule">
                <Header />
                <Schedule />
            </Route>
            <Route exact path="/createMeeting">
                <Header />
                <CreateMeeting />
            </Route>
            <Route exact path="/profile">
                <Header />
                <Profile />
            </Route>
        </Switch>
    );
}

