import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import FeatureCard from "@/components/FeatureCard";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Building2, 
  Users, 
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
            <span className="inline-block px-4 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-6">
              Especialização Lato Sensu
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight text-balance">
              Pós-Graduação em Construção de Edifícios
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
              Formação avançada para profissionais da construção civil que buscam 
              excelência técnica e atualização nas práticas construtivas contemporâneas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/o-curso" className="btn-primary inline-flex items-center gap-2">
                Conheça o Curso
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/estrutura-curricular" className="btn-outline bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 hover:text-primary-foreground">
                Ver Estrutura Curricular
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
                <p className="text-lg font-semibold text-foreground">Presencial</p>
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
      <section className="py-16 md:py-24">
        <div className="section-container">
          <SectionHeader
            title="Diferenciais do Programa"
            subtitle="Conheça os principais aspectos que tornam esta especialização uma referência na formação de profissionais da construção civil."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={GraduationCap}
              title="Corpo Docente Qualificado"
              description="Professores com ampla experiência acadêmica e prática no setor da construção civil."
            />
            <FeatureCard
              icon={Building2}
              title="Abordagem Prática"
              description="Conteúdo aplicado às demandas reais do mercado de construção de edifícios."
            />
            <FeatureCard
              icon={Users}
              title="Networking Profissional"
              description="Ambiente propício para troca de experiências entre profissionais do setor."
            />
            <FeatureCard
              icon={BookOpen}
              title="Atualização Constante"
              description="Currículo alinhado às normas técnicas vigentes e inovações tecnológicas."
            />
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-16 md:py-24 section-alt">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Público-Alvo"
                subtitle="O curso é destinado a profissionais que atuam ou desejam atuar no setor de construção de edifícios."
              />
              
              <ul className="space-y-4">
                {[
                  "Engenheiros Civis",
                  "Arquitetos e Urbanistas",
                  "Tecnólogos em Construção de Edifícios",
                  "Profissionais de áreas correlatas à construção civil"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Link to="/o-curso" className="btn-primary inline-flex items-center gap-2">
                  Saiba mais sobre o curso
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Por que se especializar em Construção de Edifícios?
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A especialização proporciona aprofundamento técnico nas diversas etapas 
                do processo construtivo, desde o planejamento até a execução e controle 
                de qualidade, capacitando o profissional para assumir posições de 
                liderança técnica no mercado.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                O programa aborda temas como sistemas construtivos, gestão de obras, 
                sustentabilidade na construção e tecnologias aplicadas, formando 
                profissionais completos e atualizados com as demandas do setor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 hero-gradient">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-4">
            Interessado em se inscrever?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Acesse o portal oficial da PUC Minas para informações sobre valores, 
            datas de inscrição e processo seletivo.
          </p>
          <a
            href="https://www.pucminas.br/pos"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 hover:text-primary-foreground inline-flex items-center gap-2"
          >
            Acessar Portal PUC Minas
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
