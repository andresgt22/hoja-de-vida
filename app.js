document.addEventListener("DOMContentLoaded", () => {

    const datos = {
        info: `
            <h1>Andrés Galindo</h1>
            <p>💻 Desarrollador en formación</p>

            <button class="btn">Descargar CV</button>

            <h3>Habilidades</h3>

            Java
            <div class="barra"><div class="progreso" data-width="80%"></div></div>

            HTML/CSS
            <div class="barra"><div class="progreso" data-width="70%"></div></div>

            MySQL
            <div class="barra"><div class="progreso" data-width="75%"></div></div>
        `,

        academica: `<h2>Académico</h2><p>SENA - Sistemas</p>`,
        experiencia: `<h2>Experiencia</h2><p>Proyectos Java y Web</p>`,
        referencias: `<h2>Referencias</h2><p>Juan Pérez</p>`
    };

    // CARGAR CONTENIDO
    Object.keys(datos).forEach(id => {
        document.getElementById(id).innerHTML = datos[id];
    });

    // BOTONES
    document.querySelectorAll('.menu button').forEach(btn => {
        btn.addEventListener('click', () => {

            const id = btn.dataset.id;

            document.querySelectorAll('.modulo').forEach(sec => {
                sec.classList.remove('activo');
            });

            document.getElementById(id).classList.add('activo');

            document.querySelectorAll('.menu button').forEach(b => {
                b.classList.remove('activo');
            });

            btn.classList.add('activo');

            animarBarras();
        });
    });

    // ANIMAR BARRAS
    function animarBarras() {
        document.querySelectorAll('.progreso').forEach(bar => {
            bar.style.width = "0";
            setTimeout(() => {
                bar.style.width = bar.dataset.width;
            }, 200);
        });
    }

    animarBarras();

    // TERMINAL
    const texto = `> Iniciando sistema...\n> Acceso concedido ✔\n> Bienvenido Andrés Galindo\n`;
    let i = 0;

    function escribir() {
        if (i < texto.length) {
            document.getElementById("terminal").innerHTML += texto[i];
            i++;
            setTimeout(escribir, 20);
        }
    }

    escribir();

    // ===== MATRIX =====
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letras = "01";
    const fontSize = 14;
    const columnas = canvas.width / fontSize;

    const drops = Array(Math.floor(columnas)).fill(1);

    function draw() {
        ctx.fillStyle = "rgba(0,0,0,0.08)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00ffaa";
        ctx.font = fontSize + "px monospace";

        for (let i = 0; i < drops.length; i++) {
            const text = letras[Math.floor(Math.random() * letras.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 35);
});
