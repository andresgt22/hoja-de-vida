// ESPERAR TODO
window.onload = function () {

    // DATOS
    const datos = {
        info: `
            <h1>Andrés Galindo</h1>
            <p>Desarrollador en formación</p>

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

    // CARGAR
    Object.keys(datos).forEach(id => {
        document.getElementById(id).innerHTML = datos[id];
    });

    // BOTONES (FORZADO)
    const botones = document.querySelectorAll('.menu button');

    botones.forEach(btn => {
        btn.onclick = function () {

            const id = this.dataset.id;

            // módulos
            document.querySelectorAll('.modulo').forEach(sec => {
                sec.classList.remove('activo');
            });

            document.getElementById(id).classList.add('activo');

            // activo
            botones.forEach(b => b.classList.remove('activo'));
            this.classList.add('activo');

            animarBarras();
        };
    });

    // BARRAS
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
    const texto = `> Bienvenido Andrés Galindo\n> Sistema listo ✔\n`;
    let i = 0;

    function escribir() {
        if (i < texto.length) {
            document.getElementById("terminal").innerHTML += texto[i];
            i++;
            setTimeout(escribir, 20);
        }
    }

    escribir();
};
