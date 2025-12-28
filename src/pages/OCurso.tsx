import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Target, Lightbulb, CheckCircle, MapPin, Calendar, Clock } from "lucide-react";

const OCurso = () => {
  const objectives = [
    "Capacitar profissionais para atuação qualificada no planejamento, execução e controle de obras de edificações",
    "Desenvolver competências técnicas e gerenciais aplicadas à construção civil",
    "Proporcionar atualização sobre normas técnicas, materiais e sistemas construtivos",
    "Formar especialistas aptos a liderar equipes e projetos de construção de edifícios"
  ];

  const competencies = [
    "Análise e interpretação de projetos estruturais, arquitetônicos e complementares",
    "Planejamento e gestão de obras de edificações",
    "Especificação de materiais e sistemas construtivos",
    "Controle de qualidade e conformidade normativa",
    "Aplicação de conceitos de sustentabilidade na construção",
    "Gestão de custos e cronogramas de obras"
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
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Conheça os objetivos, competências desenvolvidas e a modalidade do programa 
              de Pós-Graduação em Construção de Edifícios.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                title="Sobre o Programa"
                subtitle="Uma especialização completa para profissionais que buscam excelência na construção civil."
              />
              <div className="prose prose-lg text-muted-foreground">
                <p className="leading-relaxed mb-4">
                  O curso de Pós-Graduação em Construção de Edifícios oferece uma formação 
                  abrangente e atualizada, combinando fundamentos teóricos com aplicações 
                  práticas do setor.
                </p>
                <p className="leading-relaxed mb-4">
                  O programa é estruturado para atender às demandas do mercado da construção 
                  civil, preparando profissionais capazes de assumir responsabilidades 
                  técnicas e gerenciais em obras de edificações.
                </p>
                <p className="leading-relaxed">
                  Com corpo docente experiente e infraestrutura adequada, o curso proporciona 
                  um ambiente de aprendizado propício para o desenvolvimento profissional.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-academic p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Modalidade</h3>
                </div>
                <p className="text-muted-foreground">
                  Presencial, com aulas realizadas no campus da PUC Minas.
                </p>
              </div>

              <div className="card-academic p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Carga Horária</h3>
                </div>
                <p className="text-muted-foreground">
                  360 horas de atividades acadêmicas distribuídas ao longo de 18 meses.
                </p>
              </div>

              <div className="card-academic p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Período das Aulas</h3>
                </div>
                <p className="text-muted-foreground">
                  Aulas aos sábados, facilitando a conciliação com atividades profissionais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 md:py-20 section-alt">
        <div className="section-container">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <SectionHeader title="Objetivos do Curso" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-foreground leading-relaxed">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <SectionHeader 
              title="Competências Desenvolvidas"
              subtitle="Ao concluir o curso, o profissional estará apto a:"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {competencies.map((competency, index) => (
              <div 
                key={index} 
                className="p-5 bg-secondary/50 rounded-lg border border-border hover:border-primary/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-3">
                  <span className="text-primary font-semibold text-lg">{String(index + 1).padStart(2, '0')}</span>
                  <p className="text-foreground text-sm leading-relaxed">{competency}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OCurso;
