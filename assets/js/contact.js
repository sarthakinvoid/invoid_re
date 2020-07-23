var _0x3632=['AIzaSyBL9tKB1yXj8a2ny4tORqzBb6MkoRQP1lg','contactinvoid.appspot.com','https://contactinvoid.firebaseio.com','1:708323267856:web:66ee2ae63850eb4082c195','708323267856','contactinvoid','contactinvoid.firebaseapp.com'];(function(_0x1d0e4e,_0x3632d3){var _0x504efe=function(_0x2db978){while(--_0x2db978){_0x1d0e4e['push'](_0x1d0e4e['shift']());}};_0x504efe(++_0x3632d3);}(_0x3632,0xde));var _0x504e=function(_0x1d0e4e,_0x3632d3){_0x1d0e4e=_0x1d0e4e-0x0;var _0x504efe=_0x3632[_0x1d0e4e];return _0x504efe;};var _0x4c2ccf={'_0x3b00e1':_0x504e('0x2'),'_0x4e2ba6':_0x504e('0x1'),'_0x56a6d5':_0x504e('0x4'),'_0x229dae':_0x504e('0x0'),'_0x275ce8':_0x504e('0x3'),'_0x3734bc':_0x504e('0x6'),'_0x3c568f':_0x504e('0x5')};
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
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      phone:phone
    });
  }