function sendMessage() {
    var messageInput = document.getElementById("message");
    var message = messageInput.value.trim();

    if (message === "") {
        alert("Please enter a message!");
        return;
    }

    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = message;

    var timestamp = document.createElement("span");
    timestamp.classList.add("timestamp");
    timestamp.textContent = getCurrentTime();

    messageElement.appendChild(timestamp);
    chatBox.appendChild(messageElement);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;

    messageInput.value = "";
    messageInput.focus();
}

function clearChat() {
    var chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = "";
}

function getCurrentTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutes + ' ' + ampm;
}
