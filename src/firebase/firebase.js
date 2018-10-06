import firebase from 'firebase/app';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyCAxUHII1ImUyWr73SEWWRGsU387L3Nrag",
    authDomain: "road-to-react-with-firebase.firebaseapp.com",
    databaseURL: "https://road-to-react-with-firebase.firebaseio.com",
    projectId: "road-to-react-with-firebase",
    storageBucket: "road-to-react-with-firebase.appspot.com",
    messagingSenderId: "811773745708"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};