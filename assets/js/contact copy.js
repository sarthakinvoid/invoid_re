// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyBL9tKB1yXj8a2ny4tORqzBb6MkoRQP1lg",
  authDomain: "contactinvoid.firebaseapp.com",
  databaseURL: "https://contactinvoid.firebaseio.com",
  projectId: "contactinvoid",
  storageBucket: "contactinvoid.appspot.com",
  messagingSenderId: "708323267856",
  appId: "1:708323267856:web:66ee2ae63850eb4082c195"
};
// Initialize Firebase
firebase.initializeApp(config);

  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    //var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    //var message = getInputVal('message');
  
    // Save message
    saveMessage(name, email, phone);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
      document.querySelector('#closeModal').click();
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, email, phone){
    var d = new Date();
    var n = d.toUTCString();

    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      phone:phone,
      dateTime:n
    });
  }