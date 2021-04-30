import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnVp8aS_H7Ofyb9WYsRiIF1nBlQjqeWyg",
  databaseURL: "https://mychat-61b4d-default-rtdb.firebaseio.com/",
  projectId: "mychat-61b4d",
  appId: "1:921481605099:android:c8140d544a10b8ef5c73ae",
};

export default Firebase.initializeApp(firebaseConfig);
