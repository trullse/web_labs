let table = document.getElementById('numTable');
let tableSize = 0;

function generateTable() {
    let tableSizeInput = document.getElementById('tableSize');
    tableSize = parseInt(tableSizeInput.value);

    table.innerHTML = '';

    for (var i = 0; i < tableSize; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < tableSize; j++) {
            let cell = document.createElement('td');
            cell.textContent = Math.floor(Math.random() * 10);
            cell.addEventListener('click', () => colorCell(cell));
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
}

function colorCell(cell) {
    if (cell.classList.contains('selected')) {
        cell.classList.remove('selected')
    }
    else if (cell.classList.contains('selected-even')) {
        cell.classList.remove('selected-even')
    }
    else {
        let num = parseInt(cell.innerHTML, 10);
        num % 2 ? cell.classList.add('selected-even') : cell.classList.add('selected');
    }
}

function transposeMatrix() {
    const rows = table.rows;
    const transposed = [];
    for (let i = 0; i < tableSize; i++) {
        transposed.push([]);
        for (let j = 0; j < tableSize; j++) {
            transposed[i].push(rows[j].cells[i]);
        }
    }
    table.innerHTML = '';
    for (var i = 0; i < tableSize; i++) {
        let row = document.createElement('tr');

        for (let j = 0; j < tableSize; j++) {
            let cell = document.createElement('td');
            cell = transposed[i][j];
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
}
  