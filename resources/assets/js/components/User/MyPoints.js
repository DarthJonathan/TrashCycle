import React, { Component } from 'react';

export default class MyPointsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            points: {},
            token: this.props.token
        };
    }

    componentWillMount() {
        fetch('/api/user/points', {
            headers: new Headers({
                'Authorization' : 'Bearer '+this.state.token,
                'Accept': 'Application/json'
            })
        })
            .then(res => {
                return res.json();
            })
            .then(res => {
               this.setState({
                   points: res
               });
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="uk-card uk-card-default uk-card-body">
                            <h2 className="uk-card-title">My Points</h2>
                            <h1>
                                {this.state.points.points}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

