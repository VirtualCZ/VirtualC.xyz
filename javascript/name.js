function sendToConsole(event) {
  event.preventDefault();
  var input = document.getElementById("text-input").value;
  console.log(input);
  var output = document.getElementById("text-output");
  output.innerHTML = "Hello, " + input;
}
