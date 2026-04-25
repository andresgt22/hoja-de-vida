// ESPERAR A QUE CARGUE TODO
document.addEventListener("DOMContentLoaded", () => {

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
    for (let clave in datos) {
        document.getElementById(clave).innerHTML = datos[clave];
    }

    // BOTONES (YA FUNCIONA 🔥)
    document.querySelectorAll('.menu button').forEach(btn => {
        btn.addEventListener('click', () => {

            const id = btn.getAttribute('data-id');

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
            const width = bar.getAttribute('data-width');
            bar.style.width = "0";
            setTimeout(() => {
                bar.style.width = width;
            }, 200);
        });
    }

    animarBarras();

    // TERMINAL
    const texto = `
> Iniciando sistema...
> Cargando módulos...
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

    escribir();
});
