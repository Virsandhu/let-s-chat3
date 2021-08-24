var firebaseConfig = {
    apiKey: "AIzaSyDV5q83lpYq8fhr-L0wak-jPIzUeGL3jbo",
    authDomain: "let-s-chat-bbf36.firebaseapp.com",
    databaseURL: "https://let-s-chat-bbf36-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-bbf36",
    storageBucket: "let-s-chat-bbf36.appspot.com",
    messagingSenderId: "979918357175",
    appId: "1:979918357175:web:b2d880a0102c8e83af8332"
  };
  firebase.initializeApp(firebaseConfig);

user_name= localStorage.getItem("user_name");
 room_name= localStorage.getItem("room_name");

    function send(){
  msg= document.getElementById("message").value;
  document.getElementById("message").innerHTML="";
  firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
  })     
}

function logout(){
    localStorage.removeItem("room_name");
    localStorage.removeItem("user_name");
    window.location="index.html";
}