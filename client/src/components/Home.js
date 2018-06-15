import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
    state = {
        users: [],
        username: ''
    }

    componentWillMount() {
        let username = localStorage.getItem('username');
        username = username ? username : '';
        this.setState({ username: username })
    }

    signout = () => {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
            this.props.history.push('/login');
        }
    };

    render() {
        return (
            <div className="App" >
                {!localStorage.getItem('token') && (
                    <Link to="/register" > Sign up </Link >
                )}
                {!localStorage.getItem('token') && (
                    <Link to="/login" > Log In </Link >                
                )}
                <h3>Welcome {this.state.username}! Wanna see some jokes?</h3>
                <Link to="/jokes" > Jokes </Link >                
                <button onClick={this.signout} className="home-button">
                    Sign out
                </button>
            </div >
        );
    }
};

export default Home;