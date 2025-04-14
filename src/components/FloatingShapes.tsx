import { useEffect, useRef } from "react";

interface Shape {
  x: number;
  y: number;
  size: number;
  rotationSpeed: number;
  floatSpeed: number;
  opacity: number;
  rotation: number;
  type: "circle" | "square" | "triangle";
  direction: { x: number; y: number };
}

const FloatingShapes = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shapesRef = useRef<Shape[]>([]);
  const animationFrameRef = useRef<number>();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Initialize shapes
    const generateShapes = () => {
      const shapes: Shape[] = [];
      const totalShapes = 30;
      const shapeTypes: Array<"circle" | "square" | "triangle"> = ["circle", "square", "triangle"];
      
      for (let i = 0; i < totalShapes; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 20 + Math.random() * 60, // Sizes between 20px and 80px
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          floatSpeed: 0.2 - Math.random() * 0.1,
          opacity: 0.05 + Math.random() * 0.15, // Opacity between 0.05 and 0.2
          rotation: Math.random() * Math.PI * 2,
          type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
          direction: {
            x: (Math.random() - 0.5) * 2,
            y: (Math.random() - 0.5) * 2
          }
        });
      }
      
      return shapes;
    };
    
    shapesRef.current = generateShapes();
    
    const drawShape = (shape: Shape) => {
      if (!ctx) return;
      
      ctx.save();
      ctx.globalAlpha = shape.opacity;
      ctx.fillStyle = "#4b76e5"; // Light blue color matching overall theme
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      
      switch (shape.type) {
        case "circle":
          ctx.beginPath();
          ctx.arc(0, 0, shape.size / 2, 0, Math.PI * 2);
          ctx.fill();
          break;
          
        case "square":
          ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
          break;
          
        case "triangle":
          ctx.beginPath();
          ctx.moveTo(0, -shape.size / 2);
          ctx.lineTo(shape.size / 2, shape.size / 2);
          ctx.lineTo(-shape.size / 2, shape.size / 2);
          ctx.closePath();
          ctx.fill();
          break;
      }
      
      ctx.restore();
    };
    
    const updateShapes = () => {
      shapesRef.current.forEach((shape) => {
        // Update position
        shape.x += shape.direction.x * shape.floatSpeed;
        shape.y += shape.direction.y * shape.floatSpeed;
        
        // Update rotation
        shape.rotation += shape.rotationSpeed;
        
        // Bounce off walls
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size;
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size;
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size;
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size;
      });
    };
    
    const renderFrame = () => {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw shapes
      updateShapes();
      shapesRef.current.forEach(drawShape);
      
      animationFrameRef.current = requestAnimationFrame(renderFrame);
    };
    
    // Start animation
    renderFrame();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameRef.current as number);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-100 pointer-events-none"
    />
  );
};

export default FloatingShapes;