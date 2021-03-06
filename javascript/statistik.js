window.addEventListener("load", main);

function main() {
    fetchUserFromLS();
    getPlayerStats();
    getBotOneStats();
    getBotTwoStats();
}

function fetchUserFromLS() {
    const usernameInput = JSON.parse(localStorage.getItem("user"));
    fetchUserName(usernameInput);
}

function fetchUserName(usernameInput) {
    const userName = document.getElementById("user-name");
    userName.innerText = usernameInput.username;
}

