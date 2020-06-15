import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA9JHOakh0lkXjNhtnJUUWQpIA-Ij7FwKU",
  authDomain: "meals-app-c0461.firebaseapp.com",
  databaseURL: "https://meals-app-c0461.firebaseio.com",
  projectId: "meals-app-c0461",
  storageBucket: "meals-app-c0461.appspot.com",
  messagingSenderId: "14805282568",
  appId: "1:14805282568:web:2b38b2e7984fea2e3606bd",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
