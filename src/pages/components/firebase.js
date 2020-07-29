import 'firebase/firestore';


// react-crud-firebase
const firebaseConfig = {
  apiKey: "AIzaSyDTi-OML7L_TJF5D7lVT0mN_QosjC1-y-8",
  authDomain: "react-crud-firebase-1a58c.firebaseapp.com",
  databaseURL: "https://react-crud-firebase-1a58c.firebaseio.com",
  projectId: "react-crud-firebase-1a58c",
  storageBucket: "react-crud-firebase-1a58c.appspot.com",
  messagingSenderId: "939482785604",
  appId: "1:939482785604:web:efc98fd2dd19061b355911"
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
