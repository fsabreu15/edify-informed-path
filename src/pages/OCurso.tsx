import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Target, Lightbulb, CheckCircle, MapPin, Calendar, Clock, Cpu, Users, BarChart3, ArrowRight, ExternalLink } from "lucide-react";
import constructionSite from "@/assets/construction-site.jpg";
import plasteringWork from "@/assets/plastering-work.jpg";
import masonryWork from "@/assets/masonry-work.jpg";

const OCurso = () => {
  const objectives = [
    "Formar profissionais capacitados para gerenciar, planejar, executar e fiscalizar obras de edificações, com foco em tecnologias inovadoras e metodologias inovadoras",
    "Desenvolver habilidades em interpretação de projetos, orçamentação, gestão de obras, fundações e estruturas",
    "Capacitar para aplicação de ferramentas como BIM, SHM, drones e scanners a laser na construção civil",
    "Promover o uso de metodologias ágeis e Lean Construction para maior eficiência na execução das obras",
    "Estimular uma atuação ética, crítica e humanista, preparando profissionais conscientes dos impactos sociais, ambientais e econômicos"
  ];

  const competencies = [
    {
      title: "Planejamento e Execução de Obras",
      description: "Planejar, gerenciar e executar obras de edificações com foco em eficiência, qualidade, segurança e sustentabilidade. Interpretar e desenvolver projetos técnicos, orçamentos e cronogramas de obras."
    },
    {
      title: "Tecnologias Digitais Aplicadas",
      description: "Aplicar tecnologias digitais na construção civil, incluindo BIM (Building Information Modeling), SHM (Structural Health Monitoring), drones, laser scanners e câmeras 360° para captura de realidade e modelagem."
    },
    {
      title: "Metodologias Ágeis e Lean Construction",
      description: "Implementar metodologias ágeis e Lean Construction para otimização de processos, redução de desperdícios e aumento da produtividade no canteiro de obras, utilizando Scrum, Kanban e Scrumban."
    },
    {
      title: "Vistorias e Laudos Técnicos",
      description: "Realizar vistorias, avaliações, perícias, laudos e pareceres técnicos com base em normas e critérios técnicos, incluindo diagnóstico de patologias e monitoramento de saúde estrutural."
    },
    {
      title: "Integração de Conhecimentos Técnicos",
      description: "Integrar conhecimentos de fundações, estruturas de concreto armado e metálicas, sistemas pré-moldados, instalações e técnicas construtivas em soluções práticas e inovadoras."
    },
    {
      title: "Atuação Ética e Responsável",
      description: "Tomar decisões éticas e responsáveis, considerando os impactos sociais, econômicos e ambientais dos projetos de construção. Atuar de forma colaborativa e multidisciplinar, liderando equipes."
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="relative min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${constructionSite})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-90" />
        </div>
        <div className="section-container relative z-10 py-16 md:py-24">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-base font-medium mb-6">
              Especialização Lato Sensu
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              O Curso
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed text-left">
              Programa de especialização voltado à formação de profissionais capacitados 
              para liderar a transformação da construção civil com tecnologias inovadoras 
              e metodologias inovadoras.
            </p>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-10 md:py-14">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Contexto e Concepção"
              subtitle="Um curso desenvolvido para atender às demandas de um mercado em transformação."
            />
            
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
              <p className="text-xl text-foreground font-bold mb-2">
                Formação avançada para profissionais experientes
              </p>
              <p className="text-foreground text-lg mb-4">
                Este programa foi desenvolvido para profissionais que buscam ir além do conhecimento 
                básico e dominar as tecnologias de ponta do setor.
              </p>
              <p className="text-muted-foreground">
                Mesmo engenheiros e arquitetos com anos de experiência encontrarão conteúdo 
                aprofundado sobre BIM, SHM, drones, Lean Construction e outras inovações 
                que estão transformando a construção civil brasileira.
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="leading-relaxed text-lg">
                O setor da construção civil tem demonstrado um crescimento expressivo e contínuo, 
                impulsionado pela recuperação econômica e novos investimentos em infraestrutura 
                e edificações no Brasil. Esse crescimento reflete não apenas a demanda por novos 
                empreendimentos, mas também a <strong>crescente complexidade das construções</strong>, 
                exigindo profissionais cada vez mais qualificados e atualizados nas inovações 
                tecnológicas e metodológicas da área.
              </p>
              
              <p className="leading-relaxed text-lg">
                O mercado de construção civil tem se transformado com o uso de tecnologias 
                avançadas, como o <strong>Building Information Modeling (BIM)</strong>, a 
                integração de <strong>metodologias ágeis</strong>, e o uso de tecnologias de 
                captura de realidade, como <strong>drones e laser scanners</strong>. Além disso, 
                o <strong>monitoramento de saúde estrutural (SHM)</strong> tem se mostrado 
                eficiente para garantir a durabilidade e a segurança das construções.
              </p>
              
              <p className="leading-relaxed text-lg">
                O <strong>Lean Construction</strong>, com seu foco na eliminação de desperdícios 
                e na otimização de processos, tem contribuído para a melhoria da eficiência e 
                da qualidade na execução das obras. Essas inovações estão alterando a forma de 
                planejar, executar e gerenciar obras, com ênfase na eficiência, precisão e 
                sustentabilidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Info Cards */}
      <section className="py-10 md:py-14 section-alt">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Informações do Programa"
                subtitle="Características gerais da organização acadêmica do curso."
              />
              
              <div className="grid gap-4">
                <div className="card-academic p-5">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Modalidade</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    EAD com videoaulas, desenvolvido de forma assíncrona, permitindo 
                    flexibilidade e adequação à rotina profissional do aluno.
                  </p>
                </div>

                <div className="card-academic p-5">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Carga Horária</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    360 horas distribuídas em 15 disciplinas de 24 horas cada, 
                    com material didático composto principalmente por videoaulas.
                  </p>
                </div>

                <div className="card-academic p-5">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">Metodologia</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Ensino baseado na autonomia do aluno e interação no ambiente 
                    virtual, com videoaulas, leituras e tarefas práticas.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={plasteringWork} 
                  alt="Execução de revestimento" 
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg mt-8">
                <img 
                  src={masonryWork} 
                  alt="Execução de alvenaria" 
                  className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-10 md:py-14">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <SectionHeader 
                title="Objetivos Formativos" 
                subtitle="Propósitos que orientam a organização curricular e as práticas pedagógicas do programa."
              />
            </div>

            <div className="space-y-4">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground leading-relaxed">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas Section */}
      <section className="py-10 md:py-14 section-alt">
        <div className="section-container">
          <SectionHeader
            title="Eixos Temáticos"
            subtitle="Áreas de conhecimento que estruturam a formação oferecida pelo programa."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl border border-border p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Tecnologias Digitais
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                BIM (Building Information Modeling), tecnologias de captura de realidade 
                com drones, laser scanners e câmeras 360°, leitura e compatibilização 
                de projetos digitais, e monitoramento de saúde estrutural (SHM).
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Gestão e Metodologias
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Metodologias ágeis (Scrum, Kanban, Scrumban), Lean Construction, 
                gestão aplicada a projetos, planejamento, orçamento e análise 
                financeira de obras com uso de ferramentas como Power BI.
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Execução e Controle
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Fundações, estruturas de concreto armado e metálicas, sistemas 
                pré-moldados, tecnologia e processos construtivos, patologias, 
                manutenção e reforma predial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="py-10 md:py-14">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <SectionHeader 
                title="Competências Desenvolvidas"
                subtitle="Ao concluir o programa, espera-se que o egresso seja capaz de:"
              />
            </div>

            <div className="space-y-6">
              {competencies.map((competency, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-primary font-semibold text-xl flex-shrink-0">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h4 className="text-lg text-foreground font-semibold mb-2">{competency.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{competency.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 hero-gradient">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
              Transforme Sua Carreira
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8 text-center">
              Torne-se um especialista preparado para liderar a transformação da 
              construção civil com tecnologias inovadoras e metodologias inovadoras.
            </p>
            <a
              href="https://vemprapuc.pucminas.br/construcao-de-edificios-ead-com-videoaulas"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 hover:text-primary-foreground inline-flex items-center gap-2 text-lg px-8 py-4"
            >
              Inscreva-se Agora
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OCurso;