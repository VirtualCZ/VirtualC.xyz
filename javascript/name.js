function sendToConsole(event) {
  event.preventDefault();
  var input = document.getElementById("text-input").value;
  console.log(input);
  var rating = document.querySelector(".rating input").value;
  console.log("Star rating: ", rating);
  var output = document.getElementById("text-output");
  output.innerHTML = "Hello, " + input;
}
