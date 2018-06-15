import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";


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
            <div className='container'>
                <Link to="/">
                    <button className="home-button">
                        Home
                    </button>
                </Link>
                <div className='row justify-content-sm-center'>
                {this.state.jokes.map(joke => {
                    return (
                        // <div key={joke._id}>{joke.setup}</div>
                        <div key={joke._id} className="col-sm-4 friend-card mt-sm-4">
                            <div className="image-flip">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <h4 className="card-title">
                                                    {joke.type}
                                                </h4>
                                                <p className="card-title">
                                                    {joke.setup}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <h4 className="card-title">
                                                   {joke.punchline}
                                                </h4>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )

                })}    
                </div>
            </div>
         ) 
    }
}
 
export default Jokes;