// // signs you in with email/ pass
// auth.signInWithEmailAndPassword(email, pass);

// // makes user w/ email and signs them in
// auth.createUserWithEmailAndPassword(email, pass);

// // takes in a callback when the auth state changes
// auth.onAuthStateChanged(firebaseUser => {});

// Initialize Firebase
var config = {
    apiKey: "AIzaSyColcv2taBLvACqsG5sh39J68QeDvlPwKE",
    authDomain: "train-scheduler-20737.firebaseapp.com",
    databaseURL: "https://train-scheduler-20737.firebaseio.com",
    projectId: "train-scheduler-20737",
    storageBucket: "train-scheduler-20737.appspot.com",
    messagingSenderId: "868207137325"
};
firebase.initializeApp(config);

// get element values
const txtEmail = document.getElementById('txt-email');
const txtPassword = document.getElementById('txt-password');
const btnLogin = document.getElementById('btn-login');
const btnSignUp = document.getElementById('btn-signup');
const btnLogout = document.getElementById('btn-logout');

// add login event
btnLogin.addEventListener('click', e => {
    // get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    console.log(email, pass);

    // sign in
    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

btnSignUp.addEventListener('click', e => {
    // get email and pass
    // TODO: CHECK FOR REAL EMAIL
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    console.log(email, pass);

    // sign in
    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
});

// add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser => {
    firebaseUser ? console.log(firebaseUser) : console.log(`No user logged in.`);
    
});

btnLogout.addEventListener('click', e=> {
    firebase.auth().signOut();
})
