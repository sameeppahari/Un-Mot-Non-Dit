function vote(choice) {
    let response = document.getElementById("vote-response");
    if (choice === "for") {
        response.innerHTML = "France has responded: 'For the Motion' 💙";
    } else {
        response.innerHTML = "France has responded: 'Against the Motion' 💔";
    }
}
