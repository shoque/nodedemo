const createPage = () => {
  document.write("<h1>Users Location</h1>");
  document.write("<div class='form-group'><label for='usr'>Name:</label><input type='text' class='form-control' id='usr'></div>" +
    "<div class='form-group'><label for='loc'>location:</label><input type='text' class='form-control' id='loc'></div>");
  document.write("<button onClick = 'save()' type='button' class='btn btn-primary'>Save</button>");
}
createPage();
function save() {
  console.log(document.getElementById("usr").value);
  var data = {
    name: document.getElementById("usr").value,
    location: document.getElementById("loc").value
  }
  console.log(data);
  alert("data saved");
  $.post("/save", data, function(data) {});

}
