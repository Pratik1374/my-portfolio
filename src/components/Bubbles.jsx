import React, { useEffect } from 'react';

const Bubble = ({ canvasWidth, canvasHeight, color }) => {
  const maxBubbleSize = 6;
  const minBubbleSize = 2;
  const maxMovementX = 0.4;
  const minMovementX = -0.4;
  const maxMovementY = 2;
  const minMovementY = 0.7;

  const generateDecimalBetween = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(2);
  };

  const update = (bubble) => {
    bubble.posX = bubble.posX - bubble.movementX;
    bubble.posY = bubble.posY - bubble.movementY;

    if (bubble.posY < 0 || bubble.posX < 0 || bubble.posX > canvasWidth) {
      randomise(bubble);
      bubble.posY = canvasHeight;
    }
  };

  const randomise = (bubble) => {
    bubble.size = generateDecimalBetween(minBubbleSize, maxBubbleSize);
    bubble.movementX = generateDecimalBetween(minMovementX, maxMovementX);
    bubble.movementY = generateDecimalBetween(minMovementY, maxMovementY);
    bubble.posX = generateDecimalBetween(0, canvasWidth);
    bubble.posY = generateDecimalBetween(0, canvasHeight);
  };

  const bubbleList = [];
  const bubbleDensity = Math.sqrt((canvasHeight, canvasWidth) * 5);
  for (let i = 0; i < bubbleDensity; i++) {
    const bubble = {
      posX: generateDecimalBetween(0, canvasWidth),
      posY: generateDecimalBetween(0, canvasHeight),
      size: generateDecimalBetween(minBubbleSize, maxBubbleSize),
      movementX: generateDecimalBetween(minMovementX, maxMovementX),
      movementY: generateDecimalBetween(minMovementY, maxMovementY),
      color: color,
    };
    bubbleList.push(bubble);
  }

  useEffect(() => {
    const canvas = document.getElementById('bubbleCanvas');
    const ctx = canvas.getContext('2d');
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubbleList.forEach((bubble) => {
        update(bubble);
        ctx.beginPath();
        ctx.arc(bubble.posX, bubble.posY, bubble.size, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(${bubble.color}, 0.39)`;
        ctx.fill();
        ctx.strokeStyle = `rgba(${bubble.color}, 0.39)`;
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => cancelAnimationFrame(animate);
  }, [canvasHeight, canvasWidth, bubbleList, color]);

  return (
    <canvas
      id="bubbleCanvas"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    />
  );
};

const Bubbles = ({ id, color }) => {
  const canvasId = id || 'wd-floating-bubbles';
  const bubbleColor = color || '0,0,0';

  return <Bubble canvasWidth={window.innerWidth} canvasHeight={window.innerHeight} color={bubbleColor} />;
};

export default Bubbles;


