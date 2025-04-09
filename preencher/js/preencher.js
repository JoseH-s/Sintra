function assinaturaCanvas(id){
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    let desenhando = false;

    canvas.addEventListener("mousedown", ()=> desenhando = true);
    canvas.addEventListener("mouseup", ()=> desenhando = false);
    canvas.addEventListener("mouseout", ()=> desenhando = false);

    canvas.addEventListener("mousemove", function(e){
        if(!desenhando) return;

        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
        ctx.fill();
    });
}

function limparCanvas(id){
    const canvas = document.getElementById(id);
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

assinaturaCanvas('assinaturaAgente');
assinaturaCanvas('assinaturaCondutor');