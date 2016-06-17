$.get("/getAll",function(data) {

  buildTable(data);
});

const buildTable = (data) => {
document.open();
  document.write("<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css' integrity='sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7' crossorigin='anonymous'>"+

    "<table id='tab' class ='table table-bordered'><tr><th>name</th><th>location</th>" +createRows(data) + "</table>");
document.close();
}
const createRows = (data) => {


  let rowString = "<tbody>";
  for (let i = 0; i < data.length; i++) {
    rowString += "<tr><td>" + data[i].name + "</td><td>"+data[i].location+"</td>";

    rowString += "</tr>";
  }
  rowString += "</tbody>"
  return rowString;
}
