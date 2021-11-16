import React from "preact/compat";


class Room extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}

export default Room;