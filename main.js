function create_table(name) {
	var table = document.createElement("TABLE");
	table.setAttribute("id", "table_element");
	var header = to_do_table.createTHead(),
		header_row = header.insertRow(0),
		header_cell = header_row.insertCell(0);
	header_cell.innerHTML = name;
	header_cell.style.fontWeight = "bold";
	document.getElementById("table_div").appendChild(to_do_table);
	return table;
}

function create_table() {
	return create_table("Untitled List");
}

function create_list(name) {
	if (count == 0 && to_do_table) {
		clear_list();
	}
	to_do_table = document.createElement("TABLE");
	to_do_table.setAttribute("id", "table_element");
	var header = to_do_table.createTHead(),
		header_row = header.insertRow(0),
		header_cell = header_row.insertCell(0);
	header_cell.innerHTML = name;
	header_cell.style.fontWeight = "bold";
	document.getElementById("table_div").appendChild(to_do_table);
}

function create_named_list() {
	create_table(document.getElementById("list_input").value);
}

function add(current_table) {
	var table_count = current_table.rows.length;

	if (table_count == 0 && 
		current_table == null) {
		current_table = create_list("Untitled List");
	}
	var input_element = document.getElementById("task_input"),
		task = input_element.value,
	    table = document.getElementById("table_element"),
		row = table.insertRow(table.rows.length),
		cell = row.insertCell(0);
	cell.innerHTML = task;
	input_element.value = "";
}

function clear_table() {
	var table_div_element = document.getElementById("table_div"),
		first_child;
		while (first_child = table_div_element.firstChild) {
			table_div_element.removeChild(first_child);
		}
}