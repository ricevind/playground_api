const express = require("express");
const PORT = process.env.PORT || 5000;

const app = express();

app.get("/hidden-message", (req, res) =>
  res.send(`<html>
  <body>
    Karoś Kocham Cię !
    <div>
      <svg
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width="645"
        height="585"
        id="svg2"
      >
        <defs id="defs4" />
        <g id="layer1">
          <path
            d="M 297.29747,550.86823 C 283.52243,535.43191 249.1268,505.33855 220.86277,483.99412 C 137.11867,420.75228 125.72108,411.5999 91.719238,380.29088 C 29.03471,322.57071 2.413622,264.58086 2.5048478,185.95124 C 2.5493594,147.56739 5.1656152,132.77929 15.914734,110.15398 C 34.151433,71.768267 61.014996,43.244667 95.360052,25.799457 C 119.68545,13.443675 131.6827,7.9542046 172.30448,7.7296236 C 214.79777,7.4947896 223.74311,12.449347 248.73919,26.181459 C 279.1637,42.895777 310.47909,78.617167 316.95242,103.99205 L 320.95052,119.66445 L 330.81015,98.079942 C 386.52632,-23.892986 564.40851,-22.06811 626.31244,101.11153 C 645.95011,140.18758 648.10608,223.6247 630.69256,270.6244 C 607.97729,331.93377 565.31255,378.67493 466.68622,450.30098 C 402.0054,497.27462 328.80148,568.34684 323.70555,578.32901 C 317.79007,589.91654 323.42339,580.14491 297.29747,550.86823 z"
            id="path2417"
            style="fill:#ff0000"
          />
          <g transform="translate(129.28571,-64.285714)" id="g2221" />
        </g>
      </svg>
    </div>
  </body>
</html>
`)
);

app.get("/14", (req, res) =>
  res.send(`<html>
<canvas id='myCanvas' width='800' height='600'></canvas>
<script>
const endAngle = 226;
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');
let counter = 60;
let radius, tx, ty;
context.translate(tx, ty);
randomize();
requestAnimationFrame(animate);
 
function animate() {
  let x, y;
  if (counter <= endAngle) {
    let radians = Math.PI / 180 * counter;
    y = radius * Math.sin(radians);
    x = radius * Math.cos(radians);
    context.fillRect(radius / 2 - x, -y, 2, 2);
    context.fillRect(-radius / 2 + x, -y, 2, 2);
  } else {
    x = counter - endAngle - radius * 1.2;
    y = counter - endAngle + radius * .71;
    context.fillRect(x, y, 2, 2);
    context.fillRect(-x, y, 2, 2);
  }
  counter = counter + 1;
  if (counter >= endAngle + radius * 1.2) randomize();
  requestAnimationFrame(animate);
}
 
function randomize() {
  counter = 60;
  context.fillStyle = 'rgba(255,' + Math.floor(Math.random() * 255) + ', 255 ,1)';
  radius = Math.random() * 100;
  context.translate(-tx, -ty);
  tx = Math.random() * canvas.width;
  ty = Math.random() * canvas.height;
  context.translate(tx, ty);
}
</script>
</html>
`)
);

app.get("/", (req, res) => res.send("Hello world"));

app.listen(PORT, () => console.log("Example app listening on port 3000!"));
