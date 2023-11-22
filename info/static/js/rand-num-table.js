let table = document.getElementById('numTable');
let tableSize = 0;
let maxElCount = 3;

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
        if (checkCount(cell)) {
            let num = parseInt(cell.innerHTML, 10);
            num % 2 ? cell.classList.add('selected-even') : cell.classList.add('selected');
        }
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

function checkCount(cell) {
    const rows = table.rows;
    const rowIndex = cell.parentNode.rowIndex;
    console.log('row index: ' + rowIndex);
    const cellIndex = cell.cellIndex;
    console.log('cell index: ' + cellIndex);

    let rowSelectCount = 0;
    let columnSelectCount = 0;

    // Row check
    for (let i = 0; i < tableSize; i++) {
        if (rows[rowIndex].cells[i].classList.contains('selected') || 
        rows[rowIndex].cells[i].classList.contains('selected-even')) {
            rowSelectCount++;
        }
    }
    if (rowSelectCount >= maxElCount) {
        alert('The selected items in row limit is over (' + maxElCount + ')');
        return false;
    }

    // Column check
    for (let i = 0; i < tableSize; i++) {
        if (rows[i].cells[cellIndex].classList.contains('selected') ||
        rows[i].cells[cellIndex].classList.contains('selected-even')) {
            columnSelectCount++;
        }
    }
    if (columnSelectCount >= maxElCount) {
        alert('The selected items in column limit is over (' + maxElCount + ')');
        return false;
    }
    console.log('table size ' + tableSize);
    // Neighboors check
    if ((cellIndex - 1) >= 0 && (rows[rowIndex].cells[cellIndex - 1].classList.contains('selected') || rows[rowIndex].cells[cellIndex - 1].classList.contains('selected-even'))) {
        alert('Can\'t select neighboors! Left neighboor exists');
        return false;
    }

    if ((cellIndex + 1) < tableSize && (rows[rowIndex].cells[cellIndex + 1].classList.contains('selected') || rows[rowIndex].cells[cellIndex + 1].classList.contains('selected-even'))) {
        alert('Can\'t select neighboors! Right neighboor exists');
        return false;
    }

    return true;
}

function changeLimit() {
    let tableLimitInput = document.getElementById('tableLimit');
    maxElCount = parseInt(tableLimitInput.value);
}
  
function tablePlusSize() {
    let rows = table.rows;
    for (let i = 0; i < tableSize; i++) {
        let cell = document.createElement('td');
        cell.textContent = Math.floor(Math.random() * 10);
        cell.addEventListener('click', () => colorCell(cell));
        rows[i].appendChild(cell);
    }
    tableSize++;

    let row = document.createElement('tr');

    for (let j = 0; j < tableSize; j++) {
        let cell = document.createElement('td');
        cell.textContent = Math.floor(Math.random() * 10);
        cell.addEventListener('click', () => colorCell(cell));
        row.appendChild(cell);
    }

    table.appendChild(row);
}

function tableMinusSize() {
    if (tableSize > 1) {
        let rows = table.rows;
        for (let i = 0; i < tableSize; i++) {
            rows[i].deleteCell(tableSize - 1);
        }

        table.deleteRow(tableSize - 1);
        
        tableSize--;
    }   
    else {
        alert('Table has minimum size');
    }
}