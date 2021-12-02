


export var userList = [];

export const SetUsers = (...props) => {
    userList = props[0];
    console.log(userList);
}


export var roomList = [];

export const SetRooms = (...props) => {
    roomList = props[0];
    console.log(roomList);
}


export var meetingList = [];

export const SetMeetings = (...props) => {
    meetingList = props[0];
    console.log(meetingList);
}