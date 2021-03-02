import firebase from "firebase/app";
import "firebase/auth";
// import { useContext } from "react";
// import { UserContext } from "../../App";
import firebaseConfig from "./config.firebase";
// const [loggedInUser, setLoggedInUser] = useContext(UserContext);
export const initializeApp = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const { displayName, email } = result.user;
            const newUserInfo = {
                name: displayName,
                email: email,
                isSignIn: true,
                success: true,
                error: ''
            }
            return newUserInfo;
        })
        .catch((error) => {
            console.log(error);
            console.log(error.message);
        });
}

export const logoutWithPopUp = () => {
    return firebase.auth().signOut()
        .then(res => {
            const newUserInfo = {
                name : '',
                isSignIn : false,
                success : true,
                error : '',
                email : '',
            }
            return newUserInfo;
        })
        .catch((error) => {
            console.log(error);
            console.log(error.message);
        });
}

export const loginWithFacebook = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(facebookProvider)
        .then((result) => {
            const { displayName, email } = result.user;
            const newUserInfo = {
                name: displayName,
                email: email,
                isSignIn: true,
                success: true,
                error: ''
            }
            return newUserInfo;
        })
        .catch((error) => {
            console.log(error);
            console.log(error.message);
        });
}

export const createNewUser = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            // console.log(res);
            const { displayName, email } = res.user;
            const newUserInfo = { 
                name : displayName,
                email : email,
                isSignIn : true,
                success : true,
                error : ''
            }
            upDateUserName(name);
            return newUserInfo;
        })
        .catch((error) => {
            console.log(error);
            console.log(error.message);
        });
}

export const signInNewUser = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const { displayName, email } = res.user;
            const newUserInfo = { 
                name : displayName,
                email : email,
                isSignIn : true,
                success : true,
                error : ''
            }
            return newUserInfo;
        })
        .catch((error) => {
            console.log(error);
            console.log(error.message);
        });
}

const upDateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
    })
    .then(function () {
        // Update successful.
    })
    .catch(function (error) {
        // An error happened.
    });
}