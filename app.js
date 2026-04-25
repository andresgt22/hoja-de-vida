document.addEventListener("DOMContentLoaded", () => {

    const datos = {

        info: `
            <h1>Andrés Felipe Galindo Torres</h1>
            <p><strong>Desarrollador en formación</strong></p>

            <img src="foto.jpg" class="foto">

            <p>
                Estudiante de tecnología en desarrollo de software con conocimientos en programación,
                bases de datos y sistemas operativos. Experiencia en desarrollo de aplicaciones bajo
                el patrón MVC, uso de Java, MySQL y entornos Linux.
            </p>

            <h3>🧠 Habilidades Técnicas</h3>

            Java
            <div class="barra"><div class="progreso" data-width="85%"></div></div>

            MySQL / Bases de Datos
            <div class="barra"><div class="progreso" data-width="80%"></div></div>

            HTML / CSS
            <div class="barra"><div class="progreso" data-width="75%"></div></div>

            Linux
            <div class="barra"><div class="progreso" data-width="70%"></div></div>

            Git / GitHub
            <div class="barra"><div class="progreso" data-width="65%"></div></div>

            <h3>⚙️ Tecnologías y Herramientas</h3>
            <ul>
                <li>Java (POO, MVC, Swing)</li>
                <li>MySQL (consultas, CRUD)</li>
                <li>HTML, CSS y JavaScript</li>
                <li>Linux (configuración básica y servicios)</li>
                <li>Git y GitHub</li>
                <li>NetBeans / Visual Studio Code</li>
            </ul>

            <h3>🚀 Perfil Profesional</h3>
            <p>
                Me caracterizo por ser una persona responsable, analítica y con interés en el aprendizaje continuo.
                Busco fortalecer mis habilidades en desarrollo de software y adquirir experiencia profesional en el área.
            </p>
        `,

        academica: `
            <h2>🎓 Formación Académica</h2>

            <p><strong>Bachiller Académico</strong><br>
            Colegio Robert Hooke</p>

            <p><strong>Técnico Profesional en Procesos de Programación de Software</strong><br>
            Formación en desarrollo de software, bases de datos, redes y sistemas operativos.</p>

            <p><strong>Tecnólogo en Gestión de Desarrollo de Software (En curso)</strong></p>

            <h3>📚 Áreas de Formación</h3>
            <ul>
                <li>Programación orientada a objetos (Java)</li>
                <li>Desarrollo de aplicaciones web</li>
                <li>Bases de datos</li>
                <li>Sistemas operativos (Linux)</li>
                <li>Redes y seguridad</li>
                <li>Ingeniería de software</li>
            </ul>

            <h3>🏆 Logros Académicos</h3>
            <ul>
                <li>Excelente desempeño en práctica técnica (5.0)</li>
                <li>Buen rendimiento en matemáticas y programación</li>
                <li>Formación integral en desarrollo de software</li>
            </ul>
        `,

        experiencia: `
            <h2>💼 Experiencia Académica</h2>

            <ul>
                <li>
                    <strong>Sistema de Inventario (Java + MySQL)</strong><br>
                    Desarrollo de aplicación con patrón MVC, manejo de productos y control de stock.
                </li>

                <li>
                    <strong>Agenda de Contactos (CRUD en Java)</strong><br>
                    Implementación de operaciones CRUD con interfaz gráfica.
                </li>

                <li>
                    <strong>Configuración de servicios en Linux</strong><br>
                    Implementación de servicios como Samba y FTP.
                </li>

                <li>
                    <strong>Desarrollo Web</strong><br>
                    Creación de páginas web con HTML, CSS y JavaScript.
                </li>
            </ul>
        `,

        referencias: `
            <h2>📞 Referencias</h2>

            <p>
                <strong>Sandra Galindo</strong><br>
                Docente<br>
                Tel: 3028326362
            </p>

            <p>
                <strong>Jilary López</strong><br>
                Monitora de Ruta<br>
                Tel: 3122389984
            </p>

            <p>
                <strong>César Parada</strong><br>
                Ingeniero en Sistemas<br>
                Tel: 328729439
            </p>
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
    const texto = `> Iniciando sistema...
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

    // MATRIX
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

        ctx.fillStyle = "#00ffcc";
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

    setInterval(draw, 40);
});
