import {firebase} from '../firebase/firebase';

export const login = (uid) => ({type: 'LOGIN', uid});

export const startLogin = () => {
  return () => {
    return firebase
      .auth()
      .signInWithEmailAndPassword("vtomm6575@gmail.com", "vic657545A")
      .then(function (firebaseUser) {})
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
};

export const logout = () => ({type: 'LOGOUT'});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut()
  };
};
