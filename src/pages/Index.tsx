import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
import { Link } from "react-router-dom";
import { 
  Building2, 
  BookOpen,
  ArrowRight,
  Target,
  Clock,
  Award,
  Cpu,
  BarChart3,
  Wrench,
  ExternalLink
} from "lucide-react";
import heroImage from "@/assets/building-facade.jpg";
import constructionSite from "@/assets/construction-site.jpg";
import masonryWork from "@/assets/masonry-work.jpg";
import formworkRebar from "@/assets/formwork-rebar.jpg";
import plasteringWork from "@/assets/plastering-work.jpg";
import foundationWork from "@/assets/foundation-work.jpg";
import bimModel from "@/assets/bim-model.jpg";

const Index = () => {
  const technologies = [
    "Building Information Modeling (BIM)",
    "Structural Health Monitoring (SHM)",
    "Drones e Laser Scanners",
    "Lean Construction",
    "Metodologias Ágeis"
  ];

  const targetAudience = [
    "Engenheiros Civis",
    "Arquitetos e Urbanistas",
    "Engenheiros de Produção",
    "Demais engenheiros",
    "Tecnólogos em áreas de engenharia",
    "Administradores e profissionais de áreas afins"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-90" />
        </div>
        
        <div className="section-container relative z-10 py-20">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-base font-medium mb-6">
              Especialização Lato Sensu • EAD com Videoaulas
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
              Pós-Graduação em Construção de Edifícios
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 leading-relaxed max-w-2xl font-medium">
              Aprimoramento profissional de alto nível para engenheiros, arquitetos e profissionais experientes — e também para recém-formados que buscam evolução rápida na carreira.
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
              Programa avançado de especialização que integra tecnologias emergentes como BIM, SHM, drones e 
              metodologias ágeis, preparando profissionais para liderar a transformação da construção civil.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://vemprapuc.pucminas.br/construcao-de-edificios-ead-com-videoaulas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-lg"
              >
                Inscreva-se Agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link to="/o-curso" className="btn-outline bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 hover:text-primary-foreground">
                Conheça o Curso
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-10 md:py-12 section-alt">
        <div className="section-container">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Carga Horária</p>
                <p className="text-lg font-semibold text-foreground">360 horas</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Modalidade</p>
                <p className="text-lg font-semibold text-foreground">EAD com Videoaulas</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Disciplinas</p>
                <p className="text-lg font-semibold text-foreground">15 disciplinas</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Titulação</p>
                <p className="text-lg font-semibold text-foreground">Especialista</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-10 md:py-14">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Sobre o Programa"
                subtitle="Formação prática, atualizada e alinhada às demandas do setor da construção civil."
              />
              
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
                  <p className="text-xl text-foreground font-bold mb-2">
                    Este não é um curso básico.
                  </p>
                  <p className="text-foreground text-lg mb-4">
                    Trata-se de uma pós-graduação de <strong>alto nível</strong>, projetada para o aprimoramento 
                    profissional de engenheiros e arquitetos que já atuam no mercado.
                  </p>
                  <p className="text-muted-foreground">
                    Mesmo profissionais experientes encontrarão conteúdo aprofundado e atualizado 
                    sobre tecnologias emergentes, metodologias inovadoras e práticas avançadas 
                    que estão transformando o setor da construção civil.
                  </p>
                </div>

                <div className="grid gap-4">
                  <div className="bg-card rounded-xl border border-border p-5">
                    <h4 className="font-semibold text-foreground mb-2 text-lg">Para quem busca diferenciação</h4>
                    <p className="text-muted-foreground text-base">
                      Profissionais que desejam se destacar através do domínio de 
                      ferramentas como <strong>BIM, SHM, drones</strong> e metodologias ágeis.
                    </p>
                  </div>
                  <div className="bg-card rounded-xl border border-border p-5">
                    <h4 className="font-semibold text-foreground mb-2 text-lg">Abordagem técnico-científica</h4>
                    <p className="text-muted-foreground text-base">
                      Conteúdo aprofundado em monitoramento de saúde estrutural, 
                      patologias, Lean Construction e gestão avançada de obras.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Modern Image Gallery */}
            <div className="relative">
              {/* Main featured image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img 
                  src={constructionSite} 
                  alt="Canteiro de obras em construção" 
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full mb-2">
                    Execução de Obras
                  </span>
                  <p className="text-primary-foreground font-medium">
                    Acompanhamento completo de canteiros de obra
                  </p>
                </div>
              </div>
              
              {/* Floating gallery cards */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="relative rounded-xl overflow-hidden shadow-lg group aspect-square">
                  <img 
                    src={masonryWork} 
                    alt="Execução de alvenaria" 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-foreground text-xs font-medium">Alvenaria</span>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group aspect-square">
                  <img 
                    src={formworkRebar} 
                    alt="Formas e armaduras" 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-foreground text-xs font-medium">Estruturas</span>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden shadow-lg group aspect-square">
                  <img 
                    src={plasteringWork} 
                    alt="Execução de revestimento" 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="text-foreground text-xs font-medium">Revestimentos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-10 md:py-14 section-alt">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <SectionHeader
                title="Tecnologias e Metodologias"
                subtitle="O curso incorpora as mais avançadas tecnologias e metodologias do setor da construção civil."
              />
              
              <div className="grid gap-6">
                <FeatureCard
                  icon={Cpu}
                  title="Tecnologias Digitais"
                  description="BIM (Building Information Modeling), SHM (Structural Health Monitoring), drones, laser scanners e câmeras 360° aplicados à construção civil."
                />
                <FeatureCard
                  icon={BarChart3}
                  title="Gestão e Metodologias Ágeis"
                  description="Lean Construction, Scrum, Kanban e Scrumban para otimização de processos, redução de desperdícios e aumento da produtividade."
                />
                <FeatureCard
                  icon={Wrench}
                  title="Execução e Controle"
                  description="Fundações, estruturas de concreto e metálicas, sistemas pré-moldados, planejamento, orçamentação e análise financeira de obras."
                />
              </div>
            </div>
            
            {/* BIM Model Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img 
                  src={bimModel} 
                  alt="Modelo BIM de edifício" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg">
                <p className="font-bold text-lg">Modelagem BIM</p>
                <p className="text-sm opacity-90">Tecnologia de ponta</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Principais Tecnologias Abordadas
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-base font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-10 md:py-14">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Público-Alvo"
                subtitle="Profissionais com formação superior que buscam diferenciação no mercado da construção civil."
              />
              
              <ul className="space-y-4">
                {targetAudience.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-lg text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link to="/o-curso" className="btn-primary inline-flex items-center gap-2">
                  Ver Objetivos e Competências
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={foundationWork} 
                  alt="Execução de fundações" 
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Áreas de Atuação
                </h3>
                <ul className="space-y-2 text-foreground/90">
                  <li className="flex items-center gap-2 text-sm">
                    <Building2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Construtoras e incorporadoras</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Building2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Escritórios de engenharia e arquitetura</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Building2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Startups de construção tech</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Building2 className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Consultoria e empreendedorismo</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines Preview */}
      <section className="py-10 md:py-14 section-alt">
        <div className="section-container">
          <SectionHeader
            title="Estrutura Curricular"
            subtitle="15 disciplinas de 24 horas cada, totalizando 360 horas de formação especializada."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              "Introdução à Building Information Modeling",
              "Metodologias Ágeis na Prática",
              "Gestão Aplicada a Projetos",
              "Tecnologia e Processos na Construção I e II",
              "Tecnologias de Captura de Realidade",
              "Lean Construction e Tecnologia BIM",
              "Fundações para Edifícios",
              "Estruturas de Concreto e Pré-Moldados",
              "Planejamento e Orçamento de Obras",
              "Compatibilização de Projetos BIM",
              "Projeto de Estruturas Metálicas",
              "Patologias nas Edificações"
            ].map((discipline, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">{discipline}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/estrutura-curricular" className="btn-outline inline-flex items-center gap-2">
              Ver Grade Curricular Completa
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Official Info Section */}
      <section className="py-16 md:py-20 hero-gradient">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            Inscreva-se Agora
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Acesse o portal oficial da PUC Minas para realizar sua inscrição, 
            consultar valores, datas e requisitos de ingresso.
          </p>
          <a
            href="https://vemprapuc.pucminas.br/construcao-de-edificios-ead-com-videoaulas"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 hover:text-primary-foreground inline-flex items-center gap-2 text-lg px-8 py-4"
          >
            Acessar Portal de Inscrições
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;