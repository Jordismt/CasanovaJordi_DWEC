let bombes;
let descobertes;
let juegoActivo;
let cells;
let bombesDescubertes;

function iniciarJuego() {
    bombes = generarBombes();
    descobertes = 0;
    bombesDescubertes = 0;
    juegoActivo = true;
    cells = [];
    
    // Inicializar el tablero
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = ''; // Limpiar el tablero anterior

    for (let x = 0; x < 5; x++) {
        cells[x] = [];
        for (let y = 0; y < 5; y++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.x = x;
            cell.dataset.y = y;
            cell.addEventListener('click', () => manejarClick(x, y));
            gridElement.appendChild(cell);
            cells[x][y] = cell;
        }
    }

    document.getElementById('status').textContent = "Juego iniciado. Haz clic en las celdas para revelar si hay una bomba.";
}

function detenerJuego() {
    if (!juegoActivo) return;
    juegoActivo = false;
    document.getElementById('status').textContent = "Juego detenido.";
    revelarTodasLasBombas();
}

function manejarClick(x, y) {
    if (!juegoActivo) return;

    const cell = cells[x][y];

    if (cell.classList.contains('revealed')) return;

    cell.classList.add('revealed');

    if (bombes[x][y] === 1) {
        cell.classList.add('bomb');
        bombesDescubertes++;
        if (bombesDescubertes === 10) {
            document.getElementById('status').textContent = "¡Has descubierto todas las bombas! El juego ha terminado.";
            juegoActivo = false;
        } else {
            document.getElementById('status').textContent = "¡Bomba encontrada! Continúa buscando.";
        }
    } else {
        descobertes++;
        if (descobertes === (25 - 10)) { // 25 celdas menos 10 bombas
            document.getElementById('status').textContent = "¡Felicidades! Has descubierto todas las celdas seguras.";
            juegoActivo = false;
        }
    }
}

function revelarTodasLasBombas() {
    for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
            if (bombes[x][y] === 1) {
                cells[x][y].classList.add('bomb');
            }
            cells[x][y].classList.add('revealed');
        }
    }
}

function generarBombes() {
    const numFilas = 5;
    const numColumnas = 5;
    const numBombes = 10;
    let bombes = Array(numFilas).fill(0).map(() => Array(numColumnas).fill(0));
    let colisiones = 0;

    while (colisiones < numBombes) {
        let x = Math.floor(Math.random() * numFilas);
        let y = Math.floor(Math.random() * numColumnas);

        if (bombes[x][y] === 0) {
            bombes[x][y] = 1;
            colisiones++;
        }
    }

    return bombes;
}
