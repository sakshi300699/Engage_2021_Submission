// import React, { useState } from "react";
// import "./Login.css";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
// import { auth, provider } from "../../firebase";
import image from './logo_engage.jpeg';

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const signIn = () => {
//     auth.signInWithPopup(provider).catch((e) => {
//       alert(e.message);
//     });
//   };

//   const handleSignIn = (e) => {
//     e.preventDefault();

//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then((auth) => {
//         console.log(auth);
//       })
//       .catch((e) => alert(e.message));
//   };

//   const registerSignIn = (e) => {
//     e.preventDefault();

//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then((auth) => {
//         if (auth) {
//           console.log(auth);
//         }
//       })
//       .catch((e) => alert(e.message));
//   };
//   return (
//     <div className="login">
//       <div className="login__container">
//         <div className="login__logo">
//           <img
//             src={image}
//             alt=""
//           />
//         </div>
//         <div className="login__desc">
//           {/* <p>A Place to Share knowledge and better understand the world</p>
//           <p style={{ color: "royalblue", fontSize: "25px" }}>
//             HandCrafted with ❤️ by{" "}
//           </p>
//           <h3>Sakshi Bhandarkar</h3> */}
//         </div>
//         <div className="login__auth">
//           <div className="login__authOptions">
//             <div className="login__authOption">
//               <img
//                 className="login__googleAuth"
//                 src="https://media-public.canva.com/MADnBiAubGA/3/screen.svg"
//                 alt=""
//               />
//               <p onClick={signIn}>Continue With Google</p>
//             </div>
//             <div className="login__authOption">
//               <img
//                 className="login__googleAuth"
//                 src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png"
//                 alt=""
//               />
//               <span>Continue With Facebook</span>
//             </div>
//             <div className="login__authDesc">
//               <p>
//                 <span style={{ color: "blue", cursor: "pointer" }}>
//                   Sign Up With Email
//                 </span>
//                 . By continuing you indicate that you have read and agree to
//                 Quora's
//                 <span style={{ color: "blue", cursor: "pointer" }}>
//                   Terms of Service{" "}
//                 </span>
//                 and{" "}
//                 <span style={{ color: "blue", cursor: "pointer" }}>
//                   Privacy Policy
//                 </span>
//                 .
//               </p>
//             </div>
//           </div>
//           <div className="login__emailPass">
//             <div className="login__label">
//               <h4>Login</h4>
//             </div>
//             <div className="login__inputFields">
//               <div className="login__inputField">
//                 <input
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   type="text"
//                   placeholder="Email"
//                 />
//               </div>
//               <div className="login__inputField">
//                 <input
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   type="password"
//                   placeholder="Password"
//                 />
//               </div>
//             </div>
//             <div className="login__forgButt">
//               <small>Forgot Password?</small>
//               <button onClick={handleSignIn}>Login</button>
//             </div>
//             <button onClick={registerSignIn}>Register</button>
//           </div>
//         </div>
//         <div className="login__lang">
//           <p>हिन्दी</p>
//           <ArrowForwardIosIcon fontSize="small" />
//         </div>
//         <div className="login__footer">
//           <p>About</p>
//           <p>Languages</p>
//           <p>Careers</p>
//           <p>Businesses</p>
//           <p>Privacy</p>
//           <p>Terms</p>
//           <p>Contact</p>
//           {/* <p>&copy; Quora Fake Inc. 2021</p> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory, BrowserRouter as Router } from "react-router-dom";
import { auth, signInWithGoogle } from "../../firebase1";
import "./Home.css";
import Quora from '../quora';
var createHost = require('cross-domain-storage/host');
  var createGuest = require("cross-domain-storage/guest");
//   var storageHost = createHost([
//     {
//         origin: 'http://localhost:3000',
//         allowedMethods: ['get', 'set', 'remove'],
//     },
//     {
//         origin: 'http://localhost:3001',
//         allowedMethods: ['get'],
//     },
// ]);

function Home() {
  const [user, loading, error] = useAuthState(auth);
  const [crossDomainValue, setCrossDomainValue] = useState('');
  const history = useHistory();
  
useEffect(()=>{
  var bazStorage = createGuest("https://engage-submission-tool.herokuapp.com/");
  console.log(bazStorage);
  bazStorage.get("localStorageKey", function (error, value) {
    // value for the key of 'fizz' will be retrieved from localStorage on www.baz.com
    if(error){
      console.log(error)
    }else{
      setCrossDomainValue(value);
      console.log(crossDomainValue);
    }
  });
  
  if(crossDomainValue.length===0)  history.push("/dashboard");
},[])
  useEffect(() => {
    if (loading) return;
    if (user) history.push("/dashboard");
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
          Discussion Forum
        </button>
      </div>
    </div>
  );
}

const Homewrapper = () => {
  return (
    <Router>
      <Home/>
    </Router>
  )
}

export default Homewrapper;
