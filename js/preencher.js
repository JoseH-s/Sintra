

function assinaturaCanvas(id) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");

    let desenhando = false;


    function getPos(event) {
        const rect = canvas.getBoundingClientRect();
        const isTouch = event.touches && event.touches.length > 0;
        const x = isTouch ? event.touches[0].clientX : event.clientX;
        const y = isTouch ? event.touches[0].clientY : event.clientY;
        return {
            x: x - rect.left,
            y: y - rect.top
        };
    }


    canvas.addEventListener("mousedown", () => desenhando = true);
    canvas.addEventListener("mouseup", () => desenhando = false);
    canvas.addEventListener("mouseout", () => desenhando = false);
    canvas.addEventListener("mousemove", function(e) {
        if (!desenhando) return;
        const pos = getPos(e);
        desenhar(pos.x, pos.y);
    });


    canvas.addEventListener("touchstart", (e) => {
        desenhando = true;
        e.preventDefault(); 
    });

    canvas.addEventListener("touchend", () => desenhando = false);
    canvas.addEventListener("touchcancel", () => desenhando = false);
    canvas.addEventListener("touchmove", function(e) {
        if (!desenhando) return;
        const pos = getPos(e);
        desenhar(pos.x, pos.y);
        e.preventDefault(); 
    });

    function desenhar(x, y) {
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function limparCanvas(id) {
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const darkModeBtn = document.querySelector('#modo-escuro');

darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    const header = document.querySelector('header');
    if (header) header.classList.toggle('dark-mode');

    const footer = document.querySelector('footer');
    if (footer) footer.classList.toggle('dark-mode');

    const sidebar = document.querySelector('.sidebar');
    if (sidebar) sidebar.classList.toggle('dark-mode');

    if (darkModeBtn.textContent === 'dark_mode') {
        darkModeBtn.textContent = 'light_mode';
    } else {
        darkModeBtn.textContent = 'dark_mode';
    }
});


assinaturaCanvas('assinaturaAgente');
assinaturaCanvas('assinaturaCondutor');