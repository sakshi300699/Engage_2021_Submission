import React, { useEffect } from 'react';
import './App.css';
import Quora from './components/quora';
import Login from './components/auth/Login';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
      console.log(authUser);
    });
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
      {/* <Switch>
        <Route exact path="/dashboard">
          <Quora />
        </Route>
        </Switch> */}
      { user ? (<Quora />) : (<Login />) }
      
      </Router>
    </div>
  );
}

export default App;
