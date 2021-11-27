import Home from "./pages/home.js";
import Login from "./pages/login.js";
import { Switch, Route } from "react-router-dom";
import RoomList from "./pages/roomList.js";
import UserList from "./pages/userList.js";
import MeetingList from "./pages/meetingList.js";
import NewUser from "./pages/newUser.js";
import NewRoom from "./pages/newRoom.js";
import Room from "./pages/room.js";
import User from "./pages/user.js";
import Meeting from "./pages/meeting.js";
import Header from "./components/header.js";
import { isLogin } from "./data/auth.js";
import { Redirect } from "react-router";


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
            <Route exact path="/roomList">
                <Header />
                <RoomList />
            </Route>
            <Route exact path="/userList">
                <Header />
                <UserList />
            </Route>
            <Route exact path="/meetingList">
                <Header />
                <MeetingList />
            </Route>
            <Route exact path="/newUser">
                <Header />
                <NewUser />
            </Route>
            <Route exact path="/newRoom">
                <Header />
                <NewRoom />
            </Route>
            <Route exact path="/room/:room_id" render={(props) => <Room {...props} />} />
            <Route exact path="/user/:user_id" render={(props) => <User {...props} />} />
            <Route exact path="/meeting/:event_id" render={(props) => <Meeting {...props} />} />
        </Switch>
    );
}

