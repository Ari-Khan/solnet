const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// If already logged in, go straight to main
auth.onAuthStateChanged(user => {
    if (user) {
        window.location.href = "main.html";
    }
});

// Attach this to your login button
document.getElementById("googleLogin").onclick = async () => {
    try {
        await auth.signInWithPopup(provider);
        window.location.href = "main.html";
    } catch (err) {
        alert(err.message);
    }
};

