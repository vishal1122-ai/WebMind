import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import {
  ThreeAnimationManager,
  type AnimationType,
} from "@/lib/three-animations";

interface ThreeBackgroundProps {
  currentAnimation: AnimationType;
  onAnimationChange: (animation: AnimationType) => void;
}

export default function ThreeBackground({
  currentAnimation,
  onAnimationChange,
}: ThreeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationManagerRef = useRef<ThreeAnimationManager | null>(null);
  const { theme } = useTheme();
  const [isInView, setIsInView] = useState(true);
  const [hasInitialized, setHasInitialized] = useState(false);

  // Initialize Three.js and observer
  useEffect(() => {
    const container = containerRef.current;
    if (!container || animationManagerRef.current) return;

    animationManagerRef.current = new ThreeAnimationManager(container);
    setHasInitialized(true);

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(container);

    return () => {
      observer.disconnect();
      animationManagerRef.current?.dispose();
      animationManagerRef.current = null;
    };
  }, []);

  // Theme sync
  useEffect(() => {
    if (!hasInitialized) return;
    animationManagerRef.current?.setTheme(theme === "dark");
  }, [theme, hasInitialized]);

  // Switch animation
  useEffect(() => {
    if (!hasInitialized) return;
    animationManagerRef.current?.switchAnimation(currentAnimation);
  }, [currentAnimation, hasInitialized]);

  // Pause/resume rendering
  useEffect(() => {
    if (!hasInitialized || !animationManagerRef.current) return;

    if (isInView) {
      animationManagerRef.current.resume();
    } else {
      animationManagerRef.current.pause();
    }
  }, [isInView, hasInitialized]);

  return (
    <>
      <div ref={containerRef} className="absolute inset-0 z-0" />

      {/* Matrix Rain */}
      <MatrixRain visible={currentAnimation === "matrix" && isInView} />

      {/* Blobs */}
      <div className="morphing-blob absolute top-1/4 left-1/4 w-96 h-96 rounded-full"></div>
      <div
        className="morphing-blob absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full"
        style={{ animationDelay: "-4s" }}
      ></div>
    </>
  );
}

// Optimized MatrixRain with full cleanup on re-show
function MatrixRain({ visible }: { visible: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Always clear before adding new
    container.innerHTML = "";

    if (!visible) return;

    const chars =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

    for (let i = 0; i < 50; i++) {
      const char = document.createElement("div");
      char.className = "matrix-char";
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      char.style.left = Math.random() * 100 + "%";
      char.style.animationDelay = Math.random() * 5 + "s";
      char.style.animationDuration = Math.random() * 10 + 10 + "s";
      container.appendChild(char);
    }

    return () => {
      container.innerHTML = "";
    };
  }, [visible]);

  return <div ref={containerRef} className="matrix-rain" id="matrixRain" />;
}
