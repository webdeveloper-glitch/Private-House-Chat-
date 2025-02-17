// Hardcoded users and profile pictures
let users = {
    "Minhaj": { password: "Upwork.com", profilePic: "default.jpg" },
    "Ovi": { password: "Eushalover25", profilePic: "default.jpg" },
    "Eusha": { password: "Ovilover25", profilePic: "default.jpg" },
    "Galib": { password: "Footballer25", profilePic: "default.jpg" },
    "Areesha": { password: "beautyqueen25", profilePic: "default.jpg" },
    "Sadman": { password: "brokenkid25", profilePic: "default.jpg" },
    "Arno": { password: "Messilover25", profilePic: "default.jpg" },
    "Jan": { password: "Kidlover25", profilePic: "default.jpg" },
    "Hamza": { password: "cheateroftheyear", profilePic: "default.jpg" },
    "Marzina": { password: "lesbian25", profilePic: "default.jpg" },
    "Pricilla": { password: "lesbian2025", profilePic: "default.jpg" },
    "Ayaan": { password: "serpent_under_innocence", profilePic: "default.jpg" },
    "Abrar": { password: "Pencil_putter", profilePic: "default.jpg" },
    "Ahnaf": { password: "Anarosh25", profilePic: "default.jpg" },
    "Zawwad": { password: "Emotionalkid", profilePic: "default.jpg" },
    "Nairah": { password: "Boro_apu25", profilePic: "default.jpg" },
    "Tonoya": { password: "Unknownlover25", profilePic: "default.jpg" },
    "Ahona": { password: "Smartkid25", profilePic: "default.jpg" },
    "Aurgho": { password: "Fattykid25", profilePic: "default.jpg" }
};

let currentUser = null;

// Login function
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (users[username] && users[username].password === password) {
        currentUser = username;
        document.getElementById("message").innerText = "Login successful!";
        showChat(username);
    } else {
        document.getElementById("message").innerText = "Wrong username or password!";
    }
}

// Show chat and load profile picture
function showChat(username) {
    document.getElementById("chat").style.display = "block";
    document.getElementById("contacts").innerHTML = "";
    
    for (let user in users) {
        let contact = document.createElement("button");
        contact.innerText = user;
        contact.onclick = () => openChat(user);
        document.getElementById("contacts").appendChild(contact);
    }

    document.getElementById("profilePic").src = users[username].profilePic;
}

// Open chat with a user
function openChat(user) {
    document.getElementById("messages").innerHTML = "<h3>Chat with " + user + "</h3>";
}

// Change password
function changePassword() {
    if (!currentUser) return alert("You must be logged in!");

    let newPassword = prompt("Enter new password:");
    if (newPassword) {
        users[currentUser].password = newPassword;
        alert("Password changed successfully!");
    }
}

// Upload profile picture
function uploadProfilePic() {
    let file = document.getElementById("profilePicUpload").files[0];
    if (!file || !currentUser) return;

    let reader = new FileReader();
    reader.onload = function (e) {
        users[currentUser].profilePic = e.target.result;
        document.getElementById("profilePic").src = e.target.result;
        alert("Profile picture updated!");
    };
    reader.readAsDataURL(file);
}

// Logout function
function logout() {
    currentUser = null;
    document.getElementById("chat").style.display = "none";
    document.getElementById("message").innerText = "Logged out!";
}