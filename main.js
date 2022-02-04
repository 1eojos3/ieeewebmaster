  const firebaseConfig = {
    apiKey: "AIzaSyD3G3OdxEZe1-406cLeeR5f2wlhfBAiBaA",
    authDomain: "event1-40fff.firebaseapp.com",
    projectId: "event1-40fff",
    storageBucket: "event1-40fff.appspot.com",
    messagingSenderId: "870990549601",
    appId: "1:870990549601:web:e69017184db07b0cb59020",
    measurementId: "G-VPMHL76HM1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  var messagesRef = firebase.database().ref('eventform');


  $('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.name').val(),
        Number: $('.number').val(),
        date: $('.date').val(),
        time: $('.time').val()
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});
