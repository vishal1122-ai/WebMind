declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export const initializeScrollAnimations = () => {
  if (typeof window === 'undefined' || !window.gsap) return;

  const { gsap, ScrollTrigger } = window;

  // Reduced animations for better performance
  // Simple fade-in for text reveals without complex transforms
  gsap.utils.toArray('.text-reveal').forEach((container: any) => {
    const inner = container.querySelector('.text-reveal-inner');
    if (inner) {
      gsap.fromTo(inner, 
        { opacity: 0 },
        { 
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  });

  // Simplified portfolio cards animation
  gsap.utils.toArray('.portfolio-card').forEach((card: any, index: number) => {
    gsap.fromTo(card,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.4,
        delay: index * 0.05,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  // Simplified services animation
  gsap.utils.toArray('.glass-effect').forEach((service: any, index: number) => {
    gsap.fromTo(service,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.4,
        delay: index * 0.05,
        scrollTrigger: {
          trigger: service,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
};

export const animatePageTransition = () => {
  if (typeof window === 'undefined' || !window.gsap) return;

  const tl = window.gsap.timeline();
  
  tl.fromTo('main', 
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
  );
  
  return tl;
};
