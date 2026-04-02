{
  // Function prints message on the page
  const printMessage = function (msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
  };

  // Function clears all messages
  const clearMessages = function () {
    document.getElementById('messages').innerHTML = '';
  };
}
