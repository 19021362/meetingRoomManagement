import { Redirect } from "react-router";


export var auth = {};
export var isLogin = false;

export const setAuth = (props) => {
    if(props.email !== null || props.email !== undefined || props.email !== NaN) {
        auth = props;
        console.log(auth);
        isLogin = true;
    }
};

export const setLogin = (props) => {
    isLogin = props;
};

