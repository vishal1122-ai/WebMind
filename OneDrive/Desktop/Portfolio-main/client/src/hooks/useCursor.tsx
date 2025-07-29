import { useEffect } from "react";

export const useCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;

    // Use transform instead of left/top to avoid layout reflows
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const updateCursor = () => {
      if (cursor) {
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
      requestAnimationFrame(updateCursor);
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    updateCursor();

    // Hover state logic
    const hoverElements = document.querySelectorAll(
      "a, button, .portfolio-card, .testimonial-card"
    );
    const handleMouseEnter = () => cursor?.classList.add("hover");
    const handleMouseLeave = () => cursor?.classList.remove("hover");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Clean up
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
};
