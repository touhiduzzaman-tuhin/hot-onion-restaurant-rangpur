import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import logo from '../../images/logo/logo2.png'
import './Login.css';
import { FaFacebook, FaGoogle, FaSignOutAlt } from 'react-icons/fa';
import { createNewUser, initializeApp, loginWithFacebook, logoutWithPopUp, signInNewUser, signInWithGoogle } from './LoginManagement';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    document.title = 'Login';
    initializeApp();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn : '',
        success : false,
        error : '',
        name : '',
        email : '',
        password : ''
    });

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {
        signInWithGoogle()
        .then( res => {
            // console.log(res);
            // setUser(res);
            handleReplace(res, true);
        })
    }
    
    const handleFacebookLogin = () => {
        loginWithFacebook()
        .then( res => {
            // setUser(res);
            handleReplace(res, true);
        })
    }
    const handleLogout = () => {
        logoutWithPopUp()
        .then( res => {
            // setUser(res);
            handleReplace(res, false);
        })
    }

    const handleBlur = (event) => {
        let validForm = true;
        if(event.target.name === 'email'){
            validForm = /\S+@\S+\.\S+/.test(event.target.value)
        }
        else if(event.target.name === 'password'){
            let passwordHasNumber = /\d{1}/.test(event.target.value);
            let passwordLength = event.target.value.length > 5;
            validForm = passwordHasNumber && passwordLength;
        }

        if(validForm){
            const newUserInfo = {...user}
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo)
        }
    }

    const handleSubmit = (event) => {
        if(newUser && user.email && user.password){
            createNewUser(user.name, user.email, user.password)
            .then(res => {
                handleReplace(res, true);
            })
        }
        else if(!newUser && user.email && user.password){
            signInNewUser(user.email, user.password)
            .then(res => {
                handleReplace(res, true);
            })
        }
        event.preventDefault();
    }

    const handleReplace = (res, isRedirect) => {      
        const {name, email, isSignIn, error, success} = res;
        const userInfo = {...loggedInUser};
        userInfo.name = name;
        userInfo.email = email;
        userInfo.isSignIn = isSignIn;
        userInfo.error = error;
        userInfo.success = success;
        console.log(userInfo);
        setUser(userInfo);
        setLoggedInUser(userInfo);

        if(isRedirect){
            history.replace(from);
        }
    }

    // console.log(user);
    // console.log(loggedInUser);

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div style={{width: '300px', marginTop: '70px'}}>
                <img className='image-style' src={logo} alt=""/>

                <div className='login-box' align='center'>
                    
                    {
                        newUser && <input className='form-control' type="text" name="name" id="" placeholder="Name" onBlur={handleBlur} required/>
                    }
                    <br/>

                    <input className='form-control' type="email" name="email" id="" placeholder="Email" onBlur={handleBlur} required/> <br/>

                    <input className='form-control' type="password" name="password" id="" placeholder="Password" onBlur={handleBlur} required/> <br/>
                    

                    <Button variant='success' onClick={handleSubmit}>
                        {
                            newUser ? 'Sign Up' : 'Sign In'
                        }
                    </Button>

                    <p className='user-change' onClick={() => setNewUser(!newUser)}>
                        {
                            newUser ? 'Already have an account?' : 'Create a new account'
                        }
                    </p>
                </div>

                {
                    user.isSignIn ?
                    <Button onClick={handleLogout}>
                        <FaSignOutAlt></FaSignOutAlt> &nbsp; &nbsp;
                        Log Out
                    </Button> :
                    <Button onClick={handleGoogleLogin} variant="danger">
                        <FaGoogle></FaGoogle> &nbsp; &nbsp;
                        Login With Google
                    </Button>
                    
                }
                <br/>
                <br/>

                {
                    user.isSignIn ?
                    <Button onClick={handleLogout}>
                        <FaSignOutAlt></FaSignOutAlt> &nbsp; &nbsp;
                        Log Out
                    </Button> :
                    <Button onClick={handleFacebookLogin} variant='danger'>
                        <FaFacebook></FaFacebook> &nbsp; &nbsp;
                        Login With Facebook
                    </Button>
                    
                }
            </div>
        </div>
    );
};

export default Login;