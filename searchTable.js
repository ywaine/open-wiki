function searchTable() {
	// Declare variables
	var input, filter, table, tr, td, i, txtValue;
	input = document.getElementById("searchInput");
	filter = input.value.toUpperCase();
	table = document.getElementById("csvTable");
	tr = table.getElementsByTagName("tr");

	// Loop through all table rows, and hide those who don't match the search query
	for (i = 0; i < tr.length; i++) {
		// Skip the table header row
		if (i === 0) continue;

		// Get the text content of the current row
		td = tr[i].getElementsByTagName("td");
		for (var j = 0; j < td.length; j++) {
			txtValue = td[j].textContent || td[j].innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
				break;
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}