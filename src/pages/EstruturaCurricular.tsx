import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { BookOpen, Layers, ArrowRight, Cpu, Wrench, BarChart3, Building2, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import formworkRebar from "@/assets/formwork-rebar.jpg";

const EstruturaCurricular = () => {
  const disciplines = [
    {
      number: 1,
      name: "Introdução à Building Information Modeling",
      description: "Definições. Dimensões e estágios BIM. Ferramentas. Níveis de desenvolvimento (LOD). Interoperabilidade. Processos BPMN. Implementação e Execução BIM (BIP/BEP). Estratégia BIM BR. Regulação técnica para Adoção de BIM.",
      shared: true
    },
    {
      number: 2,
      name: "Metodologias Ágeis na Prática: Scrum, Kanban e Scrumban",
      description: "Diferenciar as metodologias ágeis mais comuns, realizando análise crítica, identificando riscos e oportunidades. Compreender artefatos e práticas de cada metodologia para ampliar as chances de êxito dos projetos.",
      shared: true
    },
    {
      number: 3,
      name: "Gestão Aplicada a Projetos",
      description: "PMBOK 7ª Edição com abordagem orientativa baseada em princípios e foco na entrega de valor. Gestão híbrida com elementos da 6ª edição e grupos de processos. Ambiente organizacional e aplicabilidade.",
      shared: true
    },
    {
      number: 4,
      name: "Tecnologia e Processos na Construção I",
      description: "Critérios para escolha de sistemas construtivos e estruturais. Técnicas avançadas de execução: fundação, estrutura de concreto armado, alvenarias, revestimentos argamassados. Sequenciamento executivo, racionalização e controle tecnológico.",
      shared: false
    },
    {
      number: 5,
      name: "Tecnologias de Captura de Realidade: Drones, Laser Scanner e Câmeras 360°",
      description: "Conceitos e fundamentos das tecnologias de captura. Drones (RPAS), Laser Scanners 3D e Câmeras 360°. Fotogrametria, GSD, RTK e PPK. Escaneamento a laser terrestre. Integração com fluxos BIM e planejamento 4D.",
      shared: false
    },
    {
      number: 6,
      name: "Lean Construction e Tecnologia BIM Aplicada",
      description: "Filosofia Lean Construction: fluxo de valor, eliminação de desperdícios, Value Stream Mapping, Last Planner System, Kanban e Takt Time. Modelagem BIM 3D/4D/5D. Integração Lean-BIM no planejamento e controle.",
      shared: false
    },
    {
      number: 7,
      name: "Fundações para Edifícios",
      description: "Tipos de fundações rasas e profundas. Levantamento geotécnico: sondagens e capacidade de carga. Projeto de fundações: sapatas, estacas e tubulões. Execução: escavação, concretagem, formas, escoramentos e controle de qualidade.",
      shared: false
    },
    {
      number: 8,
      name: "Tecnologia e Processos na Construção II",
      description: "Instalações elétricas e hidrossanitárias, esquadrias, pintura, impermeabilização, piscinas, elevadores, automação predial, climatização, SPDA e PCI. Fachadas e interfaces. Checklists executivos e As Built.",
      shared: false
    },
    {
      number: 9,
      name: "Projetos de Estruturas de Concreto Armado e Sistemas Pré-Moldados",
      description: "Concreto e aço como material estrutural. Durabilidade. Ações e requisitos de segurança. Conexões e juntas. Representação gráfica e detalhamento. Fabricação e montagem de pré-moldados. Formas, escoramentos e concretagem.",
      shared: false
    },
    {
      number: 10,
      name: "Planejamento, Orçamento e Análise Financeira de Obras",
      description: "Cronogramas físico-financeiros. Lean Construction e AWP. BIM 4D para simulação. Composição de custos, orçamentos com SINAPI, TCPO, análise de BDI. Indicadores de desempenho, controle por centro de custo, Power BI.",
      shared: false
    },
    {
      number: 11,
      name: "Leitura e Compatibilização de Projetos BIM",
      description: "Leitura de projetos multidisciplinares em BIM: arquitetura, estrutura, sistemas prediais. Modelagem e compatibilização. Identificação de interferências e resolução de conflitos entre disciplinas.",
      shared: false
    },
    {
      number: 12,
      name: "Projeto de Estruturas Metálicas",
      description: "Aço como material estrutural: fabricação, perfis e vantagens. Ações, segurança e estabilidade. Ligações rígidas e flexíveis. Proteção contra corrosão. Simbologia, representação, interpretação e análise de projetos.",
      shared: false
    },
    {
      number: 13,
      name: "Patologias nas Edificações",
      description: "Identificação, análise e diagnóstico de manifestações patológicas. Avaliação de falhas de execução, projeto e manutenção. Infiltrações, corrosão, fissuras, degradação. Ensaios investigativos. Relatórios técnicos e laudos.",
      shared: false
    },
    {
      number: 14,
      name: "Monitoramento de Saúde Estrutural (SHM) de Edifícios",
      description: "Conceitos, objetivos e vantagens do SHM. Tecnologias e métodos de monitoramento. Sensores e sistemas de medição. Análise de deformações, vibrações e fissuras. Integração com manutenção preditiva.",
      shared: false
    },
    {
      number: 15,
      name: "Manutenção e Reforma Predial",
      description: "Tipologias de manutenção: preventiva, corretiva e preditiva. Planejamento de reformas. NBR 16280. Responsabilidade técnica e gestão de riscos. Desafios em imóveis antigos. Projetos para obras de reforma.",
      shared: false
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="relative min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${formworkRebar})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-90" />
        </div>
        <div className="section-container relative z-10 py-16 md:py-24">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-base font-medium mb-6">
              15 Disciplinas • 360 Horas
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Estrutura Curricular
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Grade curricular completa do programa de especialização em 
              Construção de Edifícios, com disciplinas de 24 horas cada.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Organização Curricular"
              subtitle="Princípios que orientam a estruturação dos conteúdos ao longo do programa."
            />
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="leading-relaxed text-lg">
                A estrutura curricular do curso foi concebida para integrar de forma progressiva 
                os conhecimentos em <strong>tecnologias digitais</strong>, <strong>metodologias 
                de gestão</strong> e <strong>técnicas de execução</strong> de obras. As 15 disciplinas 
                estão organizadas de modo a proporcionar uma formação completa e aplicável.
              </p>
              
              <p className="leading-relaxed text-lg">
                O programa inicia com fundamentos em BIM e metodologias ágeis, avança para 
                tecnologias de captura de realidade e planejamento, e culmina com disciplinas 
                de execução, patologias e manutenção predial, permitindo ao aluno construir 
                competências de forma gradual e integrada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Architecture */}
      <section className="py-16 md:py-20 section-alt">
        <div className="section-container">
          <SectionHeader
            title="Eixos de Formação"
            subtitle="Áreas temáticas que estruturam a grade curricular do programa."
          />
          
          <div className="grid lg:grid-cols-4 gap-6 mb-12">
            <div className="card-academic p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-7 h-7 text-primary" />
              </div>
              <p className="font-semibold text-foreground mb-1">Tecnologias BIM</p>
              <p className="text-sm text-muted-foreground">Modelagem e captura de realidade</p>
            </div>
            
            <div className="card-academic p-6 text-center relative">
              <div className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2">
                <ArrowRight className="w-5 h-5 text-primary/50" />
              </div>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-7 h-7 text-primary" />
              </div>
              <p className="font-semibold text-foreground mb-1">Gestão e Planejamento</p>
              <p className="text-sm text-muted-foreground">Metodologias ágeis e Lean</p>
            </div>
            
            <div className="card-academic p-6 text-center relative">
              <div className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2">
                <ArrowRight className="w-5 h-5 text-primary/50" />
              </div>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-7 h-7 text-primary" />
              </div>
              <p className="font-semibold text-foreground mb-1">Estruturas</p>
              <p className="text-sm text-muted-foreground">Concreto, aço e fundações</p>
            </div>
            
            <div className="card-academic p-6 text-center relative">
              <div className="hidden lg:block absolute -left-3 top-1/2 -translate-y-1/2">
                <ArrowRight className="w-5 h-5 text-primary/50" />
              </div>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-7 h-7 text-primary" />
              </div>
              <p className="font-semibold text-foreground mb-1">Execução e Controle</p>
              <p className="text-sm text-muted-foreground">Patologias e manutenção</p>
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
                As disciplinas promovem integração entre os diferentes conteúdos, 
                permitindo ao aluno construir uma compreensão sistêmica dos processos 
                de produção de edificações com uso de tecnologias contemporâneas.
              </p>
            </div>
            
            <div className="card-academic p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Metodologia EAD</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Curso desenvolvido de forma assíncrona, com videoaulas elaboradas 
                pelos professores, leituras indicadas e atividades avaliativas 
                no ambiente virtual de aprendizagem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines List */}
      <section className="py-16 md:py-24">
        <div className="section-container">
          <SectionHeader
            title="Grade Curricular"
            subtitle="15 disciplinas de 24 horas cada, totalizando 360 horas de formação."
          />
          
          <div className="space-y-4">
            {disciplines.map((discipline) => (
              <div key={discipline.number} className="card-academic overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-primary/5 px-6 py-5 md:w-64 flex-shrink-0 border-b md:border-b-0 md:border-r border-border">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-primary">
                        {String(discipline.number).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="text-sm text-muted-foreground">Disciplina</p>
                        <p className="text-sm font-medium text-foreground">24 horas</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {discipline.name}
                      </h3>
                      {discipline.shared && (
                        <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full flex-shrink-0">
                          Compartilhada
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {discipline.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evaluation Section */}
      <section className="py-16 md:py-20 section-alt">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Avaliação e Titulação"
              subtitle="Critérios para aprovação e conclusão do programa."
            />
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl border border-border p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Processo de Avaliação
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Prova online: 40 pontos (mínimo 10 questões objetivas)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Atividades avaliativas no ambiente virtual: 60 pontos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Aprovação com mínimo de 70% em cada disciplina</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>TCC opcional (pode ser contratado separadamente)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl border border-border p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Titulação
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ao concluir o programa com aproveitamento satisfatório em todas 
                  as disciplinas, o aluno recebe o título de:
                </p>
                <div className="bg-primary/10 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-primary">Especialista</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    em Construção de Edifícios
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 hero-gradient">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
              Comece Sua Especialização
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Acesse o portal oficial da PUC Minas para informações sobre 
              inscrição, valores e datas de início.
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

export default EstruturaCurricular;