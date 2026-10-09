"use client";

import { useEffect, useRef } from "react";

class Heart {
  x: number = 0;
  y: number = 0;
  size: number = 0;
  speedY: number = 0;
  opacity: number = 0;
  color: string = '';
  canvasWidth: number;
  canvasHeight: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvasWidth;
    this.y = this.canvasHeight + 20;
    this.size = Math.random() * 15 + 8;
    this.speedY = Math.random() * 1.5 + 0.5;
    this.opacity = Math.random() * 0.5 + 0.3;
    this.color = ['#FFC2D1', '#FF8FAB', '#FFB3C6'][Math.floor(Math.random() * 3)];
  }

  update() {
    this.y -= this.speedY;
    if (this.y < -20) {
      this.reset();
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    const topCurveHeight = this.size * 0.3;
    ctx.moveTo(this.x, this.y + topCurveHeight);
    ctx.bezierCurveTo(this.x, this.y, this.x - this.size / 2, this.y, this.x - this.size / 2, this.y + topCurveHeight);
    ctx.bezierCurveTo(this.x - this.size / 2, this.y + (this.size + topCurveHeight) / 2, this.x, this.y + this.size, this.x, this.y + this.size);
    ctx.bezierCurveTo(this.x, this.y + this.size, this.x + this.size / 2, this.y + (this.size + topCurveHeight) / 2, this.x + this.size / 2, this.y + topCurveHeight);
    ctx.bezierCurveTo(this.x + this.size / 2, this.y, this.x, this.y, this.x, this.y + topCurveHeight);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}

export function FloatingHearts() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let hearts: Heart[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      hearts = [];
      for (let i = 0; i < 25; i++) {
        hearts.push(new Heart(canvas.width, canvas.height));
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const animateHearts = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hearts.forEach(heart => {
        heart.update();
        heart.draw(ctx);
      });
      animationFrameId = requestAnimationFrame(animateHearts);
    };

    animateHearts();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
}
