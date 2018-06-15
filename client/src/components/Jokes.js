import React from "react";
import axios from "axios";

class Jokes extends React.Component {
    state = {
        jokes: []
    };

    componentDidMount() {
        const token = localStorage.getItem('token');
        const requestOptions = { 
            headers: { 
                Authorization: token 
        }};

        axios.get("http://localhost:5000/api/jokes", requestOptions)
            .then(response => this.setState({ jokes: response.data }))
            .catch(err => this.props.history.push('/signin'))
    }

    render() { 
        return ( 
            <div>
                <button className="home-button">
                    Home
                </button>
                {this.state.jokes.map(joke => <div key={joke._id}>{joke.setup}</div>)}
            </div>
         )
    }
}
 
export default Jokes;