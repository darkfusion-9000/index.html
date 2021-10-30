// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCudMPxJ8lSLIKOQKiDoNo44q52fynBf1o",
    authDomain: "v-isul-studio-m.firebaseapp.com",
    projectId: "v-isul-studio-m",
    storageBucket: "v-isul-studio-m.appspot.com",
    messagingSenderId: "1097744949997",
    appId: "1:1097744949997:web:ba57f358e3d5ca6f6f22e4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

  function addRoom(){
        room_name=document.getElementById("room_name.value")
firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
})  }
localStorage.setItem("room_name", room_name);
Window.location = "kwitter_page.html";



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("RoomName --"+Room_names);
row = "<div class='room_name ' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +
"</div><hr>";
document.getElementById("output").innerHTML += row ;
    //End code
    });});}
getData();

function redirectToRoomName (name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = " kwitter_page.html"
    
}

function logout () {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}