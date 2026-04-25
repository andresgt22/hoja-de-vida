// ================= DATOS =================
const datos = {
    info: `
        <h1>Andrés Galindo</h1>
        <p>Desarrollador en formación</p>
        <img src="foto.jpg" width="120">

        <h3>Habilidades</h3>

        Java
        <div class="barra"><div class="progreso" style="width:80%"></div></div>

        HTML/CSS
        <div class="barra"><div class="progreso" style="width:70%"></div></div>

        MySQL
        <div class="barra"><div class="progreso" style="width:75%"></div></div>
    `,

    academica: `
        <h2>Académico</h2>
        <ul>
            <li>Bachiller</li>
            <li>SENA - Sistemas</li>
            <li>Ingeniería en curso</li>
        </ul>
    `,

    experiencia: `
        <h2>Experiencia</h2>
        <ul>
            <li>Proyecto Inventario Java MVC</li>
            <li>CRUD Agenda Contactos</li>
            <li>Desarrollo Web</li>
        </ul>
    `,

    referencias: `
        <h2>Referencias</h2>
        <p>Juan Pérez</p>
        <p>María Gómez</p>
    `
};

// ================= FUNCIONES =================
function cargar() {
    for (let clave in datos) {
        document.getElementById(clave).innerHTML = datos[clave];
    }
}

function mostrar(id) {
    document.querySelectorAll('.modulo').forEach(sec => {
        sec.classList.remove('activo');
    });
    document.getElementById(id).classList.add('activo');
}

function toggleModo() {
    document.body.classList.toggle('claro');
}

// ================= HACKER TEXTO =================
const texto = `
> Iniciando sistema...
> Cargando datos...
> Acceso concedido ✔
> Bienvenido Andrés Galindo
`;

let i = 0;

function escribir() {
    if (i < texto.length) {
        document.getElementById("terminal").innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribir, 25);
    }
}

// ================= MATRIX =================
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letras = "01";
const fontSize = 14;
const columnas = canvas.width / fontSize;

const drops = [];

for (let x = 0; x < columnas; x++) {
    drops[x] = 1;
}

function draw() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ffcc";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = letras.charAt(Math.floor(Math.random() * letras.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(draw, 33);

// INICIO
cargar();
escribir();