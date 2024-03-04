import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB6PrDSInBujzakIe9coeckt0T4cqlk1Fc",
    authDomain: "energy-a90b4.firebaseapp.com",
    projectId: "energy-a90b4",
    storageBucket: "energy-a90b4.appspot.com",
    messagingSenderId: "223235192710",
    appId: "1:223235192710:web:61520cdc034ee70b151e07",
    measurementId: "G-C9XCT1EZ35"
  };

const app = initializeApp(firebaseConfig);

export function initFirestore(){
   return app
}