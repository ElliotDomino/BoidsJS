// Roughly following the W3Schools HTML Game Example

var skyWidth = 600
var skyHeight = 500
var intervalTime = 20;
var numBoids = 50;
var padding = 20;
var lineHeight = 15

const boids = [];

var boidSky = {

    canvas : document.getElementById("boidSky"),

    start : function() {

        this.canvas.width = skyWidth;
        this.canvas.height = skyHeight;
        this.context = this.canvas.getContext("2d");
        this.frameNo = 0;
        this.interval = setInterval(updateSky, intervalTime);
        this.context.textAlign = 'center';

    },
    clear: function() {

        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    }
}

class boid {
    constructor(id, pos_x, pos_y, vel_x, vel_y, angle) {

        this.id = id;
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.vel_x = vel_x;
        this.vel_y = vel_y;
        this.angle = angle;

    }
    update() {

        let ctx = boidSky.context;
        ctx.save();
        ctx.translate(this.pos_x, this.pos_y);
        ctx.rotate((this.angle + 180) * (Math.PI / 180));
        ctx.fillText("V", 0, lineHeight / 2);
        ctx.restore();

    };
    
}

function updateSky() {

    console.log(`Clearing Sky!`)

    boidSky.clear();
    
    boids.forEach(curBoid => curBoid.update());

}

for (var i = 0; i < numBoids; i++) {

    var curBoid = new boid(
        i,
        padding + (Math.random() * (skyWidth - padding * 2)),
        padding + (Math.random() * (skyHeight - padding * 2)),
        0,
        0,
        (Math.random() * 360));

    boids.push(curBoid);

}

console.log(boids);

boidSky.start();