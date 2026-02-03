import { useRef, useEffect } from 'react';

export const InteractiveCircuits = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const mouse = { x: -1000, y: -1000 };
    let lines: CircuitLine[] = [];

    class CircuitLine {
      x: number; y: number; length: number; angle: number;
      branch: boolean; opacity: number; particles: number[];

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.length = Math.random() * 150 + 50;
        this.angle = (Math.floor(Math.random() * 4) * Math.PI) / 2;
        this.branch = Math.random() > 0.8;
        this.opacity = Math.random() * 0.2 + 0.05;
        this.particles = [0, 0.5]; // Posición de las partículas (0 a 1)
      }

      update() {
        // Mover partículas a través de la línea
        this.particles = this.particles.map(p => (p + 0.005) % 1);
      }

      draw(proximity: number) {
        if (!ctx) return;
        const endX = this.x + Math.cos(this.angle) * this.length;
        const endY = this.y + Math.sin(this.angle) * this.length;

        // Dibujar línea base
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = `rgba(212, 175, 55, ${this.opacity + proximity * 0.5})`;
        ctx.lineWidth = 0.5 + proximity;
        ctx.stroke();

        // Dibujar partículas de energía
        this.particles.forEach(p => {
          const px = this.x + Math.cos(this.angle) * (this.length * p);
          const py = this.y + Math.sin(this.angle) * (this.length * p);
          
          ctx.beginPath();
          ctx.arc(px, py, 1 + proximity, 0, Math.PI * 2);
          ctx.fillStyle = proximity > 0.5 ? '#fff' : '#d4af37';
          ctx.shadowBlur = 10 * proximity;
          ctx.shadowColor = '#d4af37';
          ctx.fill();
        });

        // Nodos en los extremos
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
        ctx.arc(endX, endY, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${0.2 + proximity})`;
        ctx.fill();
      }
    }

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      lines = Array.from({ length: 80 }, () => new CircuitLine());
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Capa de "Linterna" del mouse
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 400);
      gradient.addColorStop(0, 'rgba(212, 175, 55, 0.08)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      lines.forEach(line => {
        const dist = Math.hypot(mouse.x - line.x, mouse.y - line.y);
        const proximity = Math.max(0, 1 - dist / 350);
        line.update();
        line.draw(proximity);
      });

      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    init();
    animate();

    return () => window.removeEventListener('resize', init);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />;
};