
var width = 700;
var height = 500;
var numBoids = 50;
var padding = 20;
var lineHeight = 15;

const boids = new Array();

const boidSky = document.getElementById("boidSky");
const ctx = boidSky.getContext("2d");
ctx.font = "50px Arial";
ctx.textBaseline = "middle";
boidSky.width = width;
boidSky.height = height;

// init boids
for (var i = 0; i < numBoids; i++) {

    let boid = {
        id: i,
        vel_x: 0,
        vel_y: 0,
        pos_x: padding + (Math.random() * (width - 2 * padding)),
        pos_y: padding + (Math.random() * (height - 2 * padding))
    };

    boids.push(boid)

}

// draw the boids!

boids.forEach(boid => {
    
    ctx.save();

    ctx.translate(boid.pos_x, boid.pos_y);

    let angle = Math.random() * 360;

    ctx.rotate(angle * (Math.PI / 180));

    ctx.textAlign = 'center';
    ctx.fillText("V", 0, lineHeight / 2);

    ctx.restore();

})

// const boidsDisplay = document.getElementById("boidsDisplay");

// boids.forEach(boid => {

//     const li = document.createElement('li');
//     li.textContent = `Boid ${boid.id} is at (${Math.round(boid.pos_x)}, ${Math.round(boid.pos_y)}) with velocity (${Math.round(boid.vel_x)}, ${Math.round(boid.vel_y)})`;
//     boidsDisplay.appendChild(li)

// });
