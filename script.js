
function vote(choice) {
    let response = document.getElementById("vote-response");

    if (choice === "for") {
        response.innerHTML = "France has responded: 'For the Motion' 💙 Redirecting...";
        setTimeout(() => {
            window.location.href = "https://wa.me/918100576275?text=Hey%2C%20Senior%20Sahab%20%F0%9F%98%89";
        }, 2000); // Redirects after 2 seconds
    } else {
        response.innerHTML = "France has responded: 'Against the Motion' 💔";
    }
}
