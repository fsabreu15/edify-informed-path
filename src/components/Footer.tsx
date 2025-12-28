import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Pós-Graduação em Construção de Edifícios
            </h3>
            <p className="text-footer-foreground/70 text-sm leading-relaxed">
              Programa de especialização voltado para profissionais da construção civil 
              que buscam aprofundamento técnico e atualização em práticas construtivas modernas.
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
              <strong>Aviso Institucional:</strong> Esta é uma página informativa complementar 
              sobre o curso de Pós-Graduação em Construção de Edifícios. Para informações 
              oficiais, valores, datas e processo de inscrição, consulte os canais oficiais 
              da PUC Minas.
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
