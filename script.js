const canvas = document.getElementById('decorative-grid');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawDecorativeGrid() {
  const gridSize = 80; // Adjust the size of the grid cells
  const lineColor = '#00000060'; 

  ctx.beginPath();
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = 2;

  // Vertical lines
  for (let x = 0; x <= canvas.width; x += gridSize) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
  }

  // Horizontal lines
  for (let y = 0; y <= canvas.height; y += gridSize) {
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
  }

  ctx.stroke();
}

drawDecorativeGrid();

// Optional: Redraw the grid on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawDecorativeGrid();
});
