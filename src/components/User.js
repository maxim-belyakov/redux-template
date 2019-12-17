import React from "react"

// Dumb Component
export default class User extends React.Component {
    render() {
        return (
            <h2>Welcome to React {this.props.user}</h2>
        );
    }
}