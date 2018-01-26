import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { firebase as fbConfig } from './config'
import { reactReduxFirebase } from 'react-redux-firebase'
const firebaseConfig = {}

// react-redux-firebase config
const fbConfig = {
    apiKey: 'AIzaSyCTUERDM-Pchn_UDTsfhVPiwM4TtNIxots',
    authDomain: 'redux-firebasev3.firebaseapp.com',
    databaseURL: 'https://redux-firebasev3.firebaseio.com'
}

// initialize firebase instance
firebase.initializeApp(config); // <- new to v2.*.*

// initialize firestore
// firebase.firestore() // <- needed if using firestore

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
  // reduxFirestore(firebase) // <- needed if using firestore
)(createStore)