import { useTheme } from "@/hooks/useTheme";

export default function FloatingNav() {
  const { toggleTheme, theme } = useTheme();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="floating-nav fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-full">
      <div className="flex items-center space-x-6">
        <button 
          onClick={() => scrollToSection('home')} 
          className="nav-link text-sm font-medium hover:text-electric transition-colors"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('about')} 
          className="nav-link text-sm font-medium hover:text-electric transition-colors"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('portfolio')} 
          className="nav-link text-sm font-medium hover:text-electric transition-colors"
        >
          Portfolio
        </button>
        <button 
          onClick={() => scrollToSection('services')} 
          className="nav-link text-sm font-medium hover:text-electric transition-colors"
        >
          Services
        </button>
        <button 
          onClick={() => scrollToSection('testimonials')} 
          className="nav-link text-sm font-medium hover:text-electric transition-colors"
        >
          Testimonials
        </button>
        <button 
          onClick={() => scrollToSection('contact')} 
          className="nav-link text-sm font-medium hover:text-electric transition-colors"
        >
          Contact
        </button>
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          {theme === 'dark' ? (
            <i className="fas fa-sun"></i>
          ) : (
            <i className="fas fa-moon"></i>
          )}
        </button>
      </div>
    </nav>
  );
}
