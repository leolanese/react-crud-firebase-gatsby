import 'firebase/firestore';


// firebase dB
// Please register your firebase instance and replace the firebaseConfig
const firebaseConfig = {
  apiKey: "XXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "XXXXXXXXXXXXXXXXXXXXXXXXX.firebaseapp.com",
  databaseURL: "https://XXXXXXXXXXXXXXXXXXXXXXXXX.firebaseio.com",
  projectId: "react-crud-firebase-1a58c",
  storageBucket: "react-crud-firebase-1a58c.appspot.com",
  messagingSenderId: "XXXXXXXXXXXXXXXXXXXXXXXXX",
  appId: "XXXXXXXXXXXXXXXXXXXXXXXXX"
};

let firebaseInstance;
const getFirebase = firebase => {
  if (firebaseInstance) {
    return firebaseInstance
  } else {
    firebase.initializeApp(firebaseConfig);
    firebaseInstance = firebase
  }
  return firebase
};

export default getFirebase;
