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
  Award
} from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
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
              Aprimoramento profissional de alto nível para engenheiros, arquitetos e profissionais experientes do setor.
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
              Programa avançado de especialização que integra tecnologias construtivas contemporâneas, 
              gestão estratégica de obras e processos de execução, capacitando profissionais 
              para enfrentar os desafios complexos da construção civil atual.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://vemprapuc.pucminas.br/construcao-de-edificios-ead-com-videoaulas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Inscreva-se Agora
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/o-curso" className="btn-outline bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 hover:text-primary-foreground">
                Conheça o Curso
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 md:py-20 section-alt">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-6 bg-card rounded-lg border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Duração</p>
                <p className="text-lg font-semibold text-foreground">18 meses</p>
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

      {/* Features Section */}
      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Sobre o Programa"
              subtitle="Formação especializada para profissionais que buscam aprofundamento técnico e atualização nas práticas construtivas."
            />
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-r-lg mb-8">
                <p className="text-lg text-foreground font-medium mb-2">
                  Este não é um curso básico.
                </p>
                <p className="text-muted-foreground">
                  Trata-se de uma pós-graduação de alto nível, projetada para o aprimoramento 
                  profissional de engenheiros e arquitetos que já atuam no mercado e buscam 
                  atualização técnica avançada e diferenciação competitiva.
                </p>
              </div>

              <p className="leading-relaxed text-lg">
                O curso de Pós-Graduação <em>Lato Sensu</em> em Construção de Edifícios, 
                oferecido pela Pontifícia Universidade Católica de Minas Gerais na modalidade 
                <strong> EAD com videoaulas</strong>, constitui um programa de especialização 
                destinado a profissionais graduados em Engenharia Civil, Arquitetura e Urbanismo, 
                Tecnologia em Construção de Edifícios e áreas afins que buscam aprofundamento 
                técnico-científico no campo da construção civil.
              </p>
              
              <p className="leading-relaxed text-lg">
                A proposta pedagógica do programa está fundamentada na integração entre 
                conhecimentos teóricos e aplicações práticas, abordando de forma sistemática 
                os principais aspectos relacionados à tecnologia, gestão e processos 
                construtivos. O currículo contempla disciplinas que tratam desde os 
                fundamentos dos sistemas construtivos até questões contemporâneas como 
                sustentabilidade, desempenho das edificações e inovação tecnológica.
              </p>
              
              <p className="leading-relaxed text-lg">
                A formação proposta visa capacitar o profissional para atuar de forma 
                qualificada nas diversas etapas do processo de produção de edifícios, 
                incluindo planejamento, execução, controle de qualidade e gestão de obras. 
                O programa busca desenvolver competências técnicas e gerenciais que 
                permitam ao egresso responder às demandas atuais do setor da construção civil, 
                caracterizado pela crescente complexidade dos empreendimentos e pela 
                necessidade de incorporação de novas tecnologias e práticas sustentáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 section-alt">
        <div className="section-container">
          <SectionHeader
            title="Eixos de Formação"
            subtitle="O programa estrutura-se em torno de três eixos principais que orientam a formação do especialista em construção de edifícios."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Building2}
              title="Tecnologia Construtiva"
              description="Estudo aprofundado dos sistemas e métodos construtivos, materiais de construção e técnicas de execução aplicadas à construção de edifícios."
            />
            <FeatureCard
              icon={Target}
              title="Gestão de Obras"
              description="Desenvolvimento de competências para planejamento, coordenação e controle de empreendimentos, com ênfase em produtividade e qualidade."
            />
            <FeatureCard
              icon={BookOpen}
              title="Processos Construtivos"
              description="Análise dos processos de produção na construção civil, visando à racionalização, eficiência e adequação às normas técnicas vigentes."
            />
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Público-Alvo"
                subtitle="Profissionais graduados que atuam ou pretendem atuar no setor da construção de edifícios."
              />
              
              <ul className="space-y-4">
                {[
                  "Engenheiros Civis",
                  "Arquitetos e Urbanistas",
                  "Tecnólogos em Construção de Edifícios",
                  "Profissionais graduados em áreas afins à construção civil"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link to="/o-curso" className="btn-primary inline-flex items-center gap-2">
                  Objetivos e Competências
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Integração Teoria e Prática
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A proposta metodológica do curso privilegia a articulação entre 
                fundamentos teóricos e sua aplicação em situações concretas da prática 
                profissional. As disciplinas são conduzidas de modo a proporcionar ao 
                aluno a compreensão dos conceitos técnicos e, simultaneamente, a 
                capacidade de aplicá-los na resolução de problemas reais do canteiro 
                de obras.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Essa abordagem prepara o profissional para atuar de forma crítica e 
                propositiva diante dos desafios que caracterizam a construção civil 
                contemporânea, contribuindo para a qualificação do setor e para a 
                melhoria contínua dos processos construtivos.
              </p>
            </div>
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
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
