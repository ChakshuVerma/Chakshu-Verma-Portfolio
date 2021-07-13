// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCy_VLPayq4HwcpdqXZ3X2aLy4M3B0Y5I0",
    authDomain: "portfolio-contact-form-7d200.firebaseapp.com",
    projectId: "portfolio-contact-form-7d200",
    storageBucket: "portfolio-contact-form-7d200.appspot.com",
    messagingSenderId: "1037199713838",
    appId: "1:1037199713838:web:d21336e7b3b30413ede1bf"
};

firebase.initializeApp(firebaseConfig);

let contactInfo = firebase.database().ref("infos");

document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;

  saveContactInfo(name, email, subject, message, dateTime);

  let alert = document.getElementById('alert');
  alert.innerHTML = 'Your message has been sent successfully';

  setTimeout(() => {
    alert.innerHTML = '';
    document.querySelector(".contact-form").reset();
  }, 3000)
}

// Save user information to Firebase
function saveContactInfo(name, email, subject, message, dateTime) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    subject: subject,
    message: message,
    dateTime: dateTime
  });
}

