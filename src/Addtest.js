// Add products to <table>



function productAddToTable() {
    // First check if a <tbody> tag exists, add one if not
    if ($("#testTable tbody").length == 0) {
        $("#testTable").append("<tbody></tbody>");
    }

    // Append product to the table
    $("#testTable tbody").append("<tr>" +
        "<td>" + $("#testname").val() + "</td>" +
        "<td>" + $("#price").val() + " KD" + "</td>" +
        "</tr>");
}

function formClear() {
    $("#testname").val("");
    $("#price").val("");
}


function TableUpdate() {
    if ($("#testname").val() != null && $("#testtname").val() != '') {
        // Add product to Table
        productAddToTable();

        // Clear form fields
        formClear();

        // Focus to product name field
        $("#testname").focus();
    }
}