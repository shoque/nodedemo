
const buildTable = (data) => {
  document.write("  <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css' integrity='sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7' crossorigin='anonymous'>")
  document.write("<h1>Users Location</h1>");
  document.write("<div><table id='tab' class ='table table-bordered'><tr><th>name</th><th>location</th>" + createRows(data) + "</table></div>");
}
const createRows = (data) => {

  let rowString = "<tbody>";
  for (let i = 0; i < data.length; i++) {
    rowString += "<tr><td>" + data[i].name + "</td><td>" + data[i].location + "</td>";

    rowString += "</tr>";
  }
  rowString += "</tbody>"
  return rowString;
}
$.get("/getAll", function(data) {

  buildTable(data);
});
