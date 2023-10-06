// class Animal {
//   constructor(number) {
//     console.log("hello");
//     this.x = number;
//     this.y = 30;
//   }

//   draw() {
//     console.log("draw");
//   }
// }

// const object = new Animal(500);

// object.draw();

// const canvas = document.getElementById("canvas");
// const c = canvas.getContext("2d");

// // const randomNumber = Math.random() * (max - min) + min;

// let x = Math.random() * (300 - 0) + 0;
// let y = Math.random() * (300 - 0) + 0;
// let r = Math.random() * (20 - 0) + 0;

// //game loop
// function animate() {
//   c.clearRect(0, 0, 300, 300);
//   c.beginPath();
//   c.arc(x, y, r, 0, Math.PI * 2);
//   c.fillStyle = "red";
//   c.fill();

//   x += Math.random() * (1 - -1) + -1;
//   x += Math.random() * (1 - -1) + -1;

//   for (let i = 0; i < 50; i++) {}

// }

// animate();

const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

class Particle {
  constructor() {
    this.x = Math.random() * (300 - 0) + 0;
    this.y = Math.random() * (300 - 0) + 0;
    this.r = Math.random() * (20 - 0) + 0;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    c.fillStyle = "green";
    c.fill();
  }

  move() {
    this.x += Math.random() * (1 - -1) + -1;
    this.y += Math.random() * (1 - -1) + -1;
  }
}

const obj1 = new Particle();
const obj2 = new Particle();
const obj3 = new Particle();

function animate() {
  c.clearRect(0, 0, 300, 300);
  obj1.draw();
  obj2.draw();
  obj3.draw();
  obj1.move();
  obj2.move();
  obj3.move();
  window.requestAnimationFrame(animate);
}

animate();
