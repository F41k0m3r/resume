export let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [15],
    life: [1.5, 3],
    v: [3, 3],
    tha: [-100, 100],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: "center",
    color: ["random", "#ff0000"],
    cross: "dead",
    random: 15,
    g: 4,
    onParticleUpdate: (ctx:any, particle:any) => {
        ctx.beginPath();
        ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
    }
};