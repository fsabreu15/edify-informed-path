import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Target, Lightbulb, CheckCircle, MapPin, Calendar, Clock, Cpu, Users, BarChart3 } from "lucide-react";

const OCurso = () => {
  const objectives = [
    "Desenvolver competências técnicas para o planejamento, gestão, execução e controle de obras de edificações, considerando as especificidades dos processos construtivos contemporâneos",
    "Capacitar o profissional para a utilização de tecnologias digitais aplicadas à construção civil, incluindo ferramentas de modelagem da informação da construção e sistemas de gestão informatizada",
    "Proporcionar formação em metodologias contemporâneas de gestão de obras, com ênfase em planejamento, produtividade, qualidade e segurança do trabalho",
    "Promover a compreensão crítica das inter-relações entre projeto, produção e desempenho das edificações"
  ];

  const competencies = [
    "Planejar e coordenar a execução de obras de edificações, articulando as diferentes etapas do processo construtivo",
    "Aplicar metodologias de gestão de obras orientadas à produtividade e à qualidade",
    "Utilizar ferramentas tecnológicas para planejamento, controle e documentação de obras",
    "Especificar materiais e sistemas construtivos com base em critérios técnicos e normativos",
    "Avaliar o desempenho de edificações segundo parâmetros estabelecidos em normas técnicas",
    "Implementar práticas de gestão da qualidade e segurança no ambiente de obra"
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              O Curso
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Programa de especialização voltado à formação de profissionais qualificados 
              para atuar nos processos de planejamento, gestão e execução de obras de edificações.
            </p>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Contexto e Concepção"
              subtitle="Compreendendo as transformações do setor e a proposta formativa do programa."
            />
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p className="leading-relaxed">
                O setor da construção civil tem passado por transformações significativas 
                nas últimas décadas, impulsionadas pelo desenvolvimento de novos materiais, 
                pela evolução dos sistemas construtivos e pela crescente incorporação de 
                tecnologias digitais aos processos de projeto e produção. Esse cenário 
                impõe aos profissionais do setor a necessidade de atualização contínua e 
                de desenvolvimento de competências que transcendem a formação técnica 
                tradicional.
              </p>
              
              <p className="leading-relaxed">
                A complexidade dos empreendimentos contemporâneos exige profissionais 
                capazes de compreender e articular as múltiplas dimensões envolvidas na 
                produção de edificações: desde os aspectos técnicos relacionados à 
                execução das obras até as questões de planejamento, gestão de recursos 
                e coordenação de equipes multidisciplinares. A integração entre tecnologia, 
                gestão e execução constitui, portanto, um imperativo para a atuação 
                qualificada no mercado atual.
              </p>
              
              <p className="leading-relaxed">
                O curso de Pós-Graduação em Construção de Edifícios foi concebido para 
                responder a essas demandas, oferecendo uma formação que alia rigor 
                técnico-científico à orientação prática. A proposta pedagógica do programa 
                está fundamentada na compreensão de que a qualificação do profissional 
                da construção civil requer não apenas o domínio de conhecimentos específicos, 
                mas também a capacidade de aplicá-los de forma crítica e criativa diante 
                dos desafios concretos da prática profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Info Cards */}
      <section className="py-16 md:py-20 section-alt">
        <div className="section-container">
          <SectionHeader
            title="Informações do Programa"
            subtitle="Características gerais da organização acadêmica do curso."
          />
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-academic p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Modalidade</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Presencial, com atividades desenvolvidas nas instalações da 
                Pontifícia Universidade Católica de Minas Gerais.
              </p>
            </div>

            <div className="card-academic p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Carga Horária</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                O programa contempla atividades acadêmicas distribuídas ao longo 
                de aproximadamente 18 meses de duração.
              </p>
            </div>

            <div className="card-academic p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Organização</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Aulas realizadas aos sábados, permitindo a conciliação entre 
                atividades acadêmicas e exercício profissional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 md:py-20">
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
                  <p className="text-foreground leading-relaxed">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Areas Section */}
      <section className="py-16 md:py-20 section-alt">
        <div className="section-container">
          <SectionHeader
            title="Eixos Temáticos"
            subtitle="Áreas de conhecimento que estruturam a formação oferecida pelo programa."
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl border border-border p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Planejamento e Gestão de Obras
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Abordagem de metodologias para planejamento, programação e controle 
                de empreendimentos, incluindo gestão de custos, prazos, recursos e 
                qualidade. Ênfase em técnicas contemporâneas de gestão da produção 
                aplicadas à construção civil.
              </p>
            </div>

            <div className="bg-card rounded-xl border border-border p-8">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Tecnologias Digitais
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Estudo e aplicação de tecnologias digitais no contexto da construção 
                civil, com destaque para ferramentas de modelagem da informação da 
                construção (BIM), sistemas de gestão informatizada e recursos para 
                documentação e controle de obras.
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
                Análise dos processos de execução de obras, abrangendo sistemas 
                construtivos, técnicas de execução, controle de qualidade e 
                conformidade normativa. Discussão sobre segurança do trabalho e 
                gestão de equipes em canteiro de obras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="py-16 md:py-20">
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

            <div className="grid md:grid-cols-2 gap-4">
              {competencies.map((competency, index) => (
                <div 
                  key={index} 
                  className="p-5 bg-secondary/50 rounded-lg border border-border hover:border-primary/30 transition-colors duration-300"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-primary font-semibold text-lg">{String(index + 1).padStart(2, '0')}</span>
                    <p className="text-foreground leading-relaxed">{competency}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-12 hero-gradient">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary-foreground/90 leading-relaxed">
              Para informações detalhadas sobre requisitos de ingresso, documentação 
              e processo seletivo, consulte os canais oficiais da Pontifícia 
              Universidade Católica de Minas Gerais.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OCurso;
