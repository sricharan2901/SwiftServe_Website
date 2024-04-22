import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDI9JEYtnHe1v9vdaJbo0YDWq78658s990",
  authDomain: "swiftserve-3fe00.firebaseapp.com",
  projectId: "swiftserve-3fe00",
  storageBucket: "swiftserve-3fe00.appspot.com",
  messagingSenderId: "337948548589",
  appId: "1:337948548589:web:0adc50d637769d07049be4",
  measurementId: "G-25L14T9H0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);