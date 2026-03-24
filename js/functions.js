// Function prints message on the page
function printMessage(msg) {
  let div = document.createElement("div");
  div.innerHTML = msg;
  document.getElementById("messages").appendChild(div);
}

// Function clears all messages
function clearMessages() {
  document.getElementById("messages").innerHTML = "";
}
