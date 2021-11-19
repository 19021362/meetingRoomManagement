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


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/roomList">
                <RoomList />
            </Route>
            <Route exact path="/userList">
                <UserList />
            </Route>
            <Route exact path="/meetingList">
                <MeetingList />
            </Route>
            <Route exact path="/newUser">
                <NewUser />
            </Route>
            <Route exact path="/newRoom">
                <NewRoom />
            </Route>
            <Route exact path="/room/:room_id" render={(props) => <Room {...props} />}/>
    
            <Route exact path="/user">
                <User />
            </Route>
        </Switch>
    );
}

