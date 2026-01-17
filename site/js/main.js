const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    if (!user) {
        // Not logged in → go to login page
        window.location.href = "login.html";
        return;
    }

    // Logged in → show user info
    document.getElementById("welcomeText").textContent =
        `Welcome, ${user.displayName}`;
    document.getElementById("emailText").textContent = user.email;
    document.getElementById("avatar").src = user.photoURL;
    document.getElementById("nameText").textContent = user.displayName;
});

document.getElementById("logoutBtn").onclick = async () => {
    await auth.signOut();
    window.location.href = "login.html";
};