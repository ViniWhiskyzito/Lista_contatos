

function adicionarContato() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;

    var table = document.querySelector("table");
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var rowData = row.getElementsByTagName("td");
        var existingNome = rowData[0].textContent;
        var existingTelefone = rowData[1].textContent;

        if (existingNome === nome || existingTelefone === telefone) {
            alert("nome ou telefone já foi inserido.");
            return;
        }
    }

    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = nome;
    cell2.innerHTML = telefone;

    document.getElementById("nome").value = "";
    document.getElementById("telefone").value = "";
}