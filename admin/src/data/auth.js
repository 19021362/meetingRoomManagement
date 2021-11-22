
export var auth = {
    name: "",
    email: "",
    user_id: ""
};
export var isLogin = false;

export const SetAuth = (props) => {
    console.log(props.email);
    if (props.email != null && props.email != undefined && props.email != NaN) {
        auth = props;
        console.log(auth);
        isLogin = true;
    }
};

export const RemoveAuth = () => {
    auth = {email : ""};
    isLogin = false;
}

export const setLogin = (props) => {
    isLogin = props;
};




