// import React, { useRef, useEffect } from "react";

// const NeuralNetworkBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     const numNodes = 100;
//     const nodes = [];
//     const connections = [];

//     const colors = ["#00FFFF", "#FF00FF", "#FFFF00", "#00FF00", "#FF69B4"]; // Neon colors

//     class Node {
//       constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.radius = 3;
//         this.color = colors[Math.floor(Math.random() * colors.length)]; // Random neon color
//         this.vx = (Math.random() - 0.5) * 0.5;
//         this.vy = (Math.random() - 0.5) * 0.5;
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//         ctx.fillStyle = this.color;
//         ctx.fill();
//       }

//       update() {
//         this.x += this.vx;
//         this.y += this.vy;

//         if (this.x < 0 || this.x > canvas.width) {
//           this.vx *= -1;
//         }
//         if (this.y < 0 || this.y > canvas.height) {
//           this.vy *= -1;
//         }
//       }
//     }

//     for (let i = 0; i < numNodes; i++) {
//       const x = Math.random() * canvas.width;
//       const y = Math.random() * canvas.height;
//       nodes.push(new Node(x, y));
//     }

//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       for (let i = 0; i < nodes.length; i++) {
//         for (let j = i + 1; j < nodes.length; j++) {
//           const dx = nodes[i].x - nodes[j].x;
//           const dy = nodes[i].y - nodes[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);

//           if (dist < 100) {
//             // Connect nodes within a certain distance
//             ctx.beginPath();
//             ctx.moveTo(nodes[i].x, nodes[i].y);
//             ctx.lineTo(nodes[j].x, nodes[j].y);
//             ctx.strokeStyle = `rgba(255,255,255, ${1 - dist / 100})`; // Fade connections based on distance
//             ctx.lineWidth = 0.5;
//             ctx.stroke();
//           }
//         }
//         nodes[i].update();
//         nodes[i].draw();
//       }

//       requestAnimationFrame(animate);
//     }

//     animate();

//     // Resize canvas to fit container on window resize
//     const resizeCanvas = () => {
//       canvas.width = canvas.parentElement.offsetWidth;
//       canvas.height = canvas.parentElement.offsetHeight;
//     };
//     window.addEventListener("resize", resizeCanvas);
//     resizeCanvas(); // Initial resize

//     return () => {
//       // Clean up event listener
//       window.removeEventListener("resize", resizeCanvas);
//     };
//   }, []); // Empty dependency array means this effect runs only once on mount

//   return (
//     <div className="absolute top-0 left-0 w-1/3 h-1/2 overflow-hidden bg-black">
//       <canvas ref={canvasRef} className="absolute inset-0"></canvas>
//     </div>
//   );
// };

// export default NeuralNetworkBackground;