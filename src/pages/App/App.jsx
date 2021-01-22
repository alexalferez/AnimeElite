import React, { useState } from 'react';
import { Redirect,Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService'
import ProfilePage from '../ProfilePage/ProfilePage'
import Feed from '../Feed/Feed';

function App() {

  const [user, setUser] = useState(userService.getUser())

  function handleSignUpOrLogin(){
    setUser(userService.getUser())
  }

  function handleLogout(){
    userService.logout();
    setUser({user:null})
  }

  return (
    <div className="App">
      <Switch>
      <Route exact path="/login">
             <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/signup">
             <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          {userService.getUser() ? 
            <>
                <Route exact path="/">
                    <Feed user={user} handleLogout={handleLogout}/>
                </Route>
                <Route path="/:username">
                  <ProfilePage user={user} handleLogout={handleLogout}/>
                </Route>
            </>
            :
            <Redirect to='/login'/>
          }
  
      </Switch>
    </div>
  );
}

export default App;