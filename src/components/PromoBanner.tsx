import { ExternalLink, Sparkles, GraduationCap } from "lucide-react";

const PromoBanner = () => {
  return (
    <div className="promo-banner py-3 relative overflow-hidden">
      <div className="absolute inset-0 shimmer" />
      <div className="section-container relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="font-semibold text-sm sm:text-base">
              Inscrições Abertas!
            </span>
          </div>
          
          <div className="hidden sm:block w-px h-5 bg-primary-foreground/30" />
          
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            <span className="text-sm sm:text-base">
              <strong>Ex-alunos PUC Minas</strong> têm desconto especial
            </span>
          </div>
          
          <a
            href="https://vemprapuc.pucminas.br/construcao-de-edificios-ead-com-videoaulas"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-1.5 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-full text-sm font-semibold transition-colors"
          >
            Inscreva-se
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;