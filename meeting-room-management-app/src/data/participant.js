import { auth } from "./auth";



export var participants = [];

export const addParticipant = (...props) => {
    participants.push(props[0]);
}

export const deleteParticipant = (props) => {
    participants = participants.filter(i => i !== props )
}

export const removeParticipant = () => {
    participants = [];
}
