import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { auth, signInWithGoogle } from "../firebase";
import "./Home.css";
import image from './logo_engage.jpeg';

var createHost = require('cross-domain-storage/host');
  var createGuest = require("cross-domain-storage/guest");
  var storageHost = createHost([
    {
        origin: 'https://engage-submission-tool.herokuapp.com/',
        allowedMethods: ['get', 'set', 'remove'],
    },
    {
        origin: 'https://engage-online-forum.herokuapp.com/',
        allowedMethods: ['get'],
    },
]);

function Home() {
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();
  

  useEffect(() => {
    if (loading) return;
    if (user) {
      console.log(typeof(user));
      console.log(user['Aa']);
      localStorage.setItem("localStorageKey", user['Aa']);
      history.push("/dashboard");
    }
  }, [loading, user]);

  return (
    <div className="home">
      <div className="home__container">
        <img
          src={image}
          alt="Google Classroom Image"
          className="home__image"
          height="200px"
        />
        <button className="home__login" onClick={signInWithGoogle}>
          Login with Google
        </button>
      </div>
    </div>
  );
}

export default Home;
