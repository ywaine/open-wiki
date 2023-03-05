function insertHeader(table) {
	var header = table.createTHead();
	let tr = header.insertRow();
	let td = tr.insertCell();
	td.innerHTML = "Title";
	td = tr.insertCell();
	td.innerHTML = "URL";
	td = tr.insertCell();
	td.innerHTML = "Description";
}

function updateTable() {
	// (A) GET HTML TABLE
	let table = document.getElementById("csvTable");
	
	// (B) AJAX FETCH CSV FILE
	fetch("opendata.csv")
		.then(res => res.text())
		.then(csv => {
			// clear html table
			table.innerHTML = "";

			// insert header row
			insertHeader(table);

			var tbody = table.createTBody();

			// split into rows
			let rows = csv.split("\n");
	
			// loop through rows + split columns
			for (let row of rows) {
				let cols = row.match(/(?:\"([^\"]*(?:\"\"[^\"]*)*)\")|([^\",]+)/g);
				if (cols != null) {
					let tr = tbody.insertRow();
					for (let col of cols) {
						let td = tr.insertCell();
						td.innerHTML = col.replace(/(^"|"$)/g, "");
					}
				}
			}
		});
}

updateTable();