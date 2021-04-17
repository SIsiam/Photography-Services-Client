import React, { useContext } from 'react';
import  firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
// import logo from "../../images/logos/logo.png";
import { Link, useHistory, useLocation } from 'react-router-dom';
import Glogo from '../../images/google.png';
import { UserContext } from '../../App';
import './Login.css'

const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };




    const { setLoggedInUser } = useContext(UserContext);
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider)
            .then((res) => {
                const { displayName, email, photoURL } = res.user;
                const signInUser = { name: displayName, email, img: photoURL }
                setLoggedInUser(signInUser)
                // setUserToken();
                history.replace(from);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    // const setUserToken = () => {
    //     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then( (idToken) => {
    //         sessionStorage.setItem('myToken', idToken)

    //     }).catch((error) => {
    //         // Handle error
    //     });
    // }

    return (
        <div className="text-center login-form">
            {/* <img className="img-fluid" style={{ width: "10vw", margin: "5% 0%" }} src={logo} alt="" /> */}
            {/* <div className=" container container-fluid border bg-light">
                <h3 className="mt-5"><strong>Login With</strong></h3>
                <div style={{ border: "2px solid green", borderRadius: "20px", cursor: "pointer" }} className="p-2 mt-5 container container-fluid" onClick={signInWithGoogle}>
                    <img width="40vw" className="mr-5" src={Glogo} alt="" />Continue with google</div>
                <p className="mt-5">Don’t have an account? <Link>Create an account</Link></p>

            </div> */}
            {/* <div style={{ height: '100%' }}></div> */}
            <div className="google-btn d-flex justify-content-center align-items-center">
                <button className="btn btn-social" onClick={signInWithGoogle}>
                    <img className="social-logo" src={Glogo} alt="google" />
							Log In
						</button>
            </div>
        </div>
    );
};

export default Login;