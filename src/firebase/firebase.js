import firebase from 'firebase/app';
import 'firebase/auth';

// const prodConfig = { OPTIONAL SECOND STEP - create second project for production so that data from deployed app isn't confused with data in dev app
//     apiKey: REACT_APP_API_KEY,
//     authDomain: REACT_APP_AUTH_DOMAIN,
//     databaseURL: REACT_APP_DATABASE_URL,
//     projectId: REACT_APP_PROJECT_ID,
//     storageBucket: REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: REACT_APP_MESSAGING_SENDER_ID
// };

const config = { // would make this `devConfig` if taking the optional step above
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    databaseURL: REACT_APP_DATABASE_URL,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID
};

// const config = process.env.NODE_ENV === 'production'  // additional setup for optional step
//   ? prodConfig
//   : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth
};
