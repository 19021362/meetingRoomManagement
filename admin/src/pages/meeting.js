import React from "preact/compat";


class Meeting extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
}

export default Meeting;