import { Link } from "react-router-dom";
import { ExternalLink, GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-display font-bold">
                Pós-Graduação
              </h3>
            </div>
            <p className="text-xl font-semibold text-footer-foreground/90 mb-2">
              Construção de Edifícios
            </p>
            <p className="text-footer-foreground/70 text-sm leading-relaxed">
              Especialização avançada para profissionais experientes da construção civil 
              que buscam domínio de tecnologias emergentes e metodologias inovadoras.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="footer-link text-sm">Início</Link>
              <Link to="/o-curso" className="footer-link text-sm">O Curso</Link>
              <Link to="/estrutura-curricular" className="footer-link text-sm">Estrutura Curricular</Link>
              <Link to="/coordenacao-docentes" className="footer-link text-sm">Coordenação e Docentes</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Oficiais</h4>
            <a
              href="https://vemprapuc.pucminas.br/construcao-de-edificios-ead-com-videoaulas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 hover:bg-accent/30 rounded-lg text-sm font-medium transition-colors mb-3"
            >
              Inscreva-se Agora
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.pucminas.br/pos"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link text-sm flex items-center gap-1"
            >
              Portal de Pós-Graduação PUC Minas
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="border-t border-footer-foreground/20 pt-8">
          <div className="bg-footer-foreground/10 rounded-lg p-4 mb-6">
            <p className="text-sm text-footer-foreground/80 text-center leading-relaxed">
              <strong>Aviso:</strong> Este é um site informativo complementar, <strong>não institucional</strong>, 
              desenvolvido para divulgação do curso. Para inscrições, valores, documentação 
              e informações oficiais, consulte sempre os canais oficiais da PUC Minas.
            </p>
          </div>
          
          <p className="text-xs text-footer-foreground/50 text-center">
            © {new Date().getFullYear()} — Página informativa acadêmica
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
