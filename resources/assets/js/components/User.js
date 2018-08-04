import React from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter,
    Link,
    Route
} from 'react-router-dom';

import Home from './User/Home';
import MyPointsPage from './User/MyPoints';

let Navigation = (props) => {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg navbar-light bg-light col-lg-12">
              <div className="container px-2 px-sm-3">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav mx-auto" uk-tab="true">
                          <li className="nav-item uk-active">
                              <Link className="nav-link" to="/user/">Dashboard</Link>
                          </li>
                          <li className="nav-item uk-active">
                              <Link className="nav-link" to="/user/mypoints">My Points</Link>
                          </li>
                      </ul>
                  </div>
              </div>
            </nav>
        </div>
    );
};

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: this.props.token
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className={"container-fluid"}>
                    <Navigation />
                    <Route exact path="/user/" component={() => <Home token={this.state.token} />}/>
                    <Route exact path="/user/mypoints" component={() => <MyPointsPage token={this.state.token}/>}/>
                </div>
            </BrowserRouter>
        );
    }
};

if(document.getElementById('users'))
    var token = document.getElementById('users').dataset.token;
ReactDOM.render(<User token = {token} />, document.getElementById('users'));