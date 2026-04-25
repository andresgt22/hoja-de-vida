document.addEventListener("DOMContentLoaded", () => {

    const datos = {
        info: `
            <h1>Andrés Galindo</h1>
            <p>💻 Desarrollador en formación apasionado por el backend y web.</p>

            <button class="btn">Descargar CV</button>

            <h3>Habilidades</h3>

            Java
            <div class="barra"><div class="progreso" data-width="80%"></div></div>

            HTML/CSS
            <div class="barra"><div class="progreso" data-width="70%"></div></div>

            MySQL
            <div class="barra"><div class="progreso" data-width="75%"></div></div>
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
});
