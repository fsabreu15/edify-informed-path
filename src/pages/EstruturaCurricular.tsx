import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { BookOpen, Layers, ArrowRight, Compass, Wrench, BarChart3, Leaf } from "lucide-react";

const EstruturaCurricular = () => {
  const contentAreas = [
    {
      icon: Compass,
      title: "Fundamentos Técnico-Científicos",
      description: "O primeiro eixo curricular abrange os conhecimentos fundamentais que constituem a base teórica para a compreensão dos fenômenos envolvidos na construção de edifícios. Incluem-se neste eixo conteúdos relativos aos materiais de construção, aos sistemas estruturais e às técnicas de fundação, tratados sob perspectiva analítica e com ênfase nas propriedades que determinam seu comportamento e aplicabilidade.",
      topics: [
        "Propriedades e comportamento dos materiais de construção",
        "Concepção e análise de sistemas estruturais",
        "Fundamentos de geotecnia e técnicas de fundação",
        "Inter-relações entre materiais, estrutura e desempenho"
      ]
    },
    {
      icon: Wrench,
      title: "Tecnologias e Sistemas Construtivos",
      description: "Este eixo contempla o estudo aprofundado dos sistemas e subsistemas que compõem uma edificação. A abordagem privilegia a compreensão das técnicas de execução, dos requisitos de desempenho e das interfaces entre os diferentes componentes construtivos, proporcionando ao aluno uma visão sistêmica da produção de edifícios.",
      topics: [
        "Sistemas de vedação vertical e horizontal",
        "Revestimentos internos e externos",
        "Instalações hidrossanitárias e elétricas",
        "Impermeabilização e estanqueidade",
        "Esquadrias e sistemas de cobertura"
      ]
    },
    {
      icon: BarChart3,
      title: "Planejamento e Gestão de Obras",
      description: "O terceiro eixo concentra-se no desenvolvimento de competências gerenciais aplicadas à construção civil. Abordam-se metodologias de planejamento, técnicas de programação e controle, além de ferramentas para gestão de recursos e tomada de decisão. Incluem-se também conceitos contemporâneos de gestão da produção, como princípios de Lean Construction e abordagens orientadas à melhoria contínua.",
      topics: [
        "Planejamento e programação de obras",
        "Orçamentação e controle de custos",
        "Gestão de suprimentos e logística de canteiro",
        "Metodologias de gestão da produção",
        "Gestão da qualidade e segurança do trabalho"
      ]
    },
    {
      icon: Leaf,
      title: "Tecnologia, Inovação e Sustentabilidade",
      description: "O eixo conclusivo do programa aborda temas emergentes e transversais que caracterizam a construção civil contemporânea. Discutem-se as implicações ambientais da atividade construtiva, as ferramentas tecnológicas para projeto e gestão, e os critérios de desempenho e durabilidade das edificações, preparando o profissional para os desafios atuais e futuros do setor.",
      topics: [
        "Sustentabilidade e construção de baixo impacto",
        "Modelagem da informação da construção (BIM)",
        "Avaliação de desempenho de edificações",
        "Patologias e manutenção predial",
        "Inovação tecnológica no setor construtivo"
      ]
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Estrutura Curricular
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Organização dos conteúdos e eixos temáticos que compõem a formação 
              do especialista em Construção de Edifícios.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Concepção Curricular"
              subtitle="Princípios que orientam a organização dos conteúdos ao longo do programa."
            />
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="leading-relaxed">
                A estrutura curricular do curso de Pós-Graduação em Construção de Edifícios 
                foi concebida a partir da compreensão de que a formação do especialista em 
                construção civil requer a articulação entre três dimensões complementares: 
                os fundamentos técnico-científicos, as tecnologias construtivas e as 
                competências de gestão. Esta integração constitui o princípio organizador 
                do currículo e reflete-se na sequência e no encadeamento das disciplinas.
              </p>
              
              <p className="leading-relaxed">
                A progressão dos conteúdos obedece a uma lógica de complexidade crescente. 
                Os módulos iniciais estabelecem as bases conceituais necessárias para a 
                compreensão dos fenômenos envolvidos na produção de edifícios, enquanto 
                os módulos subsequentes aprofundam o estudo dos sistemas construtivos e 
                das técnicas de execução. Os conteúdos de gestão e planejamento permeiam 
                toda a estrutura curricular, sendo tratados de forma progressivamente mais 
                complexa à medida que o aluno avança no programa.
              </p>
              
              <p className="leading-relaxed">
                A articulação entre teoria e prática profissional constitui outro princípio 
                estruturante do currículo. As disciplinas são desenvolvidas de modo a 
                proporcionar não apenas o domínio conceitual dos temas abordados, mas também 
                a capacidade de aplicação dos conhecimentos em situações concretas da 
                atividade profissional. Estudos de caso, análises de projetos reais e 
                discussões sobre práticas de mercado integram o repertório metodológico 
                do programa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Overview */}
      <section className="py-16 md:py-20 section-alt">
        <div className="section-container">
          <SectionHeader
            title="Arquitetura do Programa"
            subtitle="Visão geral da organização dos eixos temáticos e sua progressão ao longo do curso."
          />
          
          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            <div className="card-academic p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Compass className="w-7 h-7 text-primary" />
              </div>
              <p className="font-semibold text-foreground mb-1">Fundamentos</p>
              <p className="text-sm text-muted-foreground">Base técnico-científica</p>
            </div>
            
            <div className="card-academic p-6 text-center relative">
              <div className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2">
                <ArrowRight className="w-5 h-5 text-primary/50" />
              </div>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-7 h-7 text-primary" />
              </div>
              <p className="font-semibold text-foreground mb-1">Tecnologias</p>
              <p className="text-sm text-muted-foreground">Sistemas construtivos</p>
            </div>
            
            <div className="card-academic p-6 text-center relative">
              <div className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2">
                <ArrowRight className="w-5 h-5 text-primary/50" />
              </div>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-7 h-7 text-primary" />
              </div>
              <p className="font-semibold text-foreground mb-1">Gestão</p>
              <p className="text-sm text-muted-foreground">Planejamento e controle</p>
            </div>
            
            <div className="card-academic p-6 text-center relative">
              <div className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2">
                <ArrowRight className="w-5 h-5 text-primary/50" />
              </div>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-7 h-7 text-primary" />
              </div>
              <p className="font-semibold text-foreground mb-1">Integração</p>
              <p className="text-sm text-muted-foreground">Inovação e sustentabilidade</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-academic p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Integração Curricular</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Os eixos temáticos não são compartimentos isolados. Ao longo do programa, 
                promove-se a integração entre os diferentes conteúdos, permitindo ao aluno 
                construir uma compreensão sistêmica dos processos de produção de edificações.
              </p>
            </div>
            
            <div className="card-academic p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Aplicação Prática</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A metodologia de ensino privilegia a articulação entre conceitos teóricos 
                e situações práticas, utilizando estudos de caso, análises de projeto e 
                discussões sobre a realidade do canteiro de obras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Areas Section */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <SectionHeader
            title="Eixos de Conteúdo"
            subtitle="Áreas temáticas que estruturam a formação oferecida pelo programa."
          />
          
          <div className="space-y-8">
            {contentAreas.map((area, index) => (
              <div key={index} className="card-academic overflow-hidden">
                <div className="bg-primary/5 px-6 py-5 border-b border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <area.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm text-muted-foreground">Eixo {String(index + 1).padStart(2, '0')}</span>
                      <h3 className="text-xl font-semibold text-foreground">
                        {area.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {area.description}
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                      Temas Abordados
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {area.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-foreground text-sm">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 md:py-20 section-alt">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Abordagem Metodológica"
              subtitle="Orientações que guiam o desenvolvimento das atividades acadêmicas."
            />
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="leading-relaxed">
                A proposta metodológica do programa está fundamentada na aprendizagem ativa 
                e na articulação entre conhecimentos teóricos e práticos. As disciplinas 
                são desenvolvidas por meio de exposições dialogadas, estudos de caso, 
                análises de projetos e situações-problema que simulam desafios reais da 
                prática profissional.
              </p>
              
              <p className="leading-relaxed">
                A experiência profissional dos docentes e a diversidade de formação dos 
                alunos constituem elementos enriquecedores do processo de ensino-aprendizagem, 
                favorecendo a troca de conhecimentos e a construção coletiva do saber. 
                Incentiva-se a reflexão crítica sobre as práticas correntes e a busca por 
                soluções inovadoras para os problemas do setor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 hero-gradient">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary-foreground/90 leading-relaxed mb-4">
              A estrutura curricular apresentada nesta página tem caráter descritivo 
              e visa oferecer uma visão geral da organização do programa.
            </p>
            <p className="text-primary-foreground/90 leading-relaxed">
              Para informações detalhadas sobre disciplinas, ementas e carga horária, 
              consulte os canais oficiais da Pontifícia Universidade Católica de Minas Gerais.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EstruturaCurricular;
