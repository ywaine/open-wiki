// Declare variables
var tableBody = document.getElementById("csvTable").getElementsByTagName('tbody')[0];
var rowIndex = 1;

function addRow() {
	var titleInput = document.getElementById("title");
	var urlInput = document.getElementById("url");
	var descriptionInput = document.getElementById("description");

	// Get the table and insert a new row
	var table = document.getElementById("csvTable");
	var row = table.insertRow(-1);

	// Insert the new row with data from the input fields
	var titleCell = row.insertCell();
	var urlCell = row.insertCell();
	var descriptionCell = row.insertCell();
	titleCell.innerHTML = titleInput.value;
	urlCell.innerHTML = urlInput.value;
	descriptionCell.innerHTML = descriptionInput.value;

	// // Clear the input fields
	// titleInput.value = "";
	// urlInput.value = "";
	// descriptionInput.value = "";
	document.getElementById("customform").reset();
}


// function addRow() {
// 	// Get form values
// 	var title = document.getElementById("title").value;
// 	var url = document.getElementById("url").value;
// 	var description = document.getElementById("description").value;

// 	// // Send data to server-side script
// 	// $.post("append_data.php", {title: title, url: url, description: description}, function(data) {
// 	// 	// Clear form inputs
// 	// 	$("#addRowForm").trigger("reset");

// 	// 	// Reload table with updated data
// 	// 	$("#csvTable").load("data.csv");
// 	// });


// 	// Clear form inputs
// 	document.getElementById("addRowForm").reset();
// }

// function addRow() {
// 	// Get form values
// 	var title = document.getElementById("title").value;
// 	var url = document.getElementById("url").value;
// 	var description = document.getElementById("description").value;

// 	console.log(title + " " + url + " " + description);

// 	// Send AJAX request to Python server
// 	var xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function() {
// 		if (this.readyState == 4 && this.status == 200) {
// 			// Display success message
// 			alert("Row added to CSV file!");
// 			// Reload page to show updated table
// 			// location.reload();
// 			// updateTable();
// 		}
// 	};
// 	xhttp.open("POST", "cgi-bin/append_data.py", true);
// 	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// 	xhttp.send("title=" + title + "&url=" + url + "&description=" + description);
// 	console.log("hello");
// 	alert("done");
// }
