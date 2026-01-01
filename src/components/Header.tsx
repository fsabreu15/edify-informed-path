import { Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Início" },
    { path: "/o-curso", label: "O Curso" },
    { path: "/estrutura-curricular", label: "Estrutura Curricular" },
    { path: "/coordenacao-docentes", label: "Coordenação e Docentes" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="section-container">
        <div className="flex items-center justify-between h-18 md:h-22 py-3">
          <Link to="/" className="flex flex-col group">
            <span className="text-2xl md:text-3xl lg:text-4xl font-display font-bold gradient-text">
              Pós-Graduação
            </span>
            <span className="text-base md:text-lg text-muted-foreground -mt-1 group-hover:text-foreground transition-colors">
              Construção de Edifícios
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative ${isActive(item.path) ? "nav-link-active" : "nav-link"} after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://vemprapuc.pucminas.br/construcao-de-edificios-ead-com-videoaulas"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 text-sm py-2.5"
            >
              Inscreva-se
              <ExternalLink className="w-4 h-4" />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`py-2 px-3 rounded-lg transition-colors ${isActive(item.path) ? "bg-primary/10 text-primary font-semibold" : "text-foreground hover:bg-muted"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://vemprapuc.pucminas.br/construcao-de-edificios-ead-com-videoaulas"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 mt-2"
              >
                Inscreva-se
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;