import React from 'react';
import {Link, BrowserRouter, Route} from 'react-router-dom';
import Profile from './Profile';

import './App.css';

class App extends React.Component {
  constructor( props ){
    super (props);
    this.state = {
      firstName : "Hunter",
      lastName : "Waters"
    }
  }
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/">
            Home
          </Link>
          <Link to="/profile">
            Profile
          </Link>

          <Route path="/profile" render={ (props) => <Profile 
                                                        firstName={this.state.firstName}
                                                        lastName={this.state.lastName}/>} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
