import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { User, GraduationCap, Mail, BookOpen } from "lucide-react";

const CoordenacaoDocentes = () => {
  const coordinator = {
    name: "Prof. Dr. Nome do Coordenador",
    title: "Coordenador do Curso",
    formation: "Doutor em Engenharia Civil",
    areas: ["Construção de Edifícios", "Gestão de Obras", "Tecnologia da Construção"],
    lattes: "http://lattes.cnpq.br/"
  };

  const faculty = [
    {
      name: "Prof. Dr. Nome Professor 1",
      formation: "Doutor em Engenharia de Estruturas",
      disciplines: ["Sistemas Estruturais de Edifícios", "Tecnologia das Fundações"]
    },
    {
      name: "Prof. Me. Nome Professor 2",
      formation: "Mestre em Construção Civil",
      disciplines: ["Materiais de Construção Aplicados", "Vedações e Revestimentos"]
    },
    {
      name: "Prof. Dr. Nome Professor 3",
      formation: "Doutora em Engenharia Civil",
      disciplines: ["Instalações Prediais", "Impermeabilização e Patologias"]
    },
    {
      name: "Prof. Me. Nome Professor 4",
      formation: "Mestre em Gerenciamento de Construção",
      disciplines: ["Planejamento e Controle de Obras", "Gestão de Custos na Construção"]
    },
    {
      name: "Prof. Dr. Nome Professor 5",
      formation: "Doutor em Arquitetura e Urbanismo",
      disciplines: ["Sustentabilidade na Construção Civil"]
    },
    {
      name: "Prof. Me. Nome Professor 6",
      formation: "Mestre em Engenharia Civil",
      disciplines: ["Inovações Tecnológicas e BIM", "Gestão de Qualidade e Normas Técnicas"]
    },
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Coordenação e Docentes
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Conheça o corpo docente qualificado que conduz o programa de 
              Pós-Graduação em Construção de Edifícios.
            </p>
          </div>
        </div>
      </section>

      {/* Coordinator Section */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <SectionHeader
            title="Coordenação do Curso"
            subtitle="A coordenação do programa é responsável pela organização acadêmica e qualidade do ensino."
          />

          <div className="card-academic p-8 max-w-2xl">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <User className="w-12 h-12 text-primary" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {coordinator.name}
                </h3>
                <p className="text-accent font-medium mb-3">{coordinator.title}</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <GraduationCap className="w-4 h-4" />
                    <span>{coordinator.formation}</span>
                  </div>
                  
                  <div>
                    <p className="text-muted-foreground mb-1">Áreas de Atuação:</p>
                    <div className="flex flex-wrap gap-2">
                      {coordinator.areas.map((area, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 md:py-20 section-alt">
        <div className="section-container">
          <SectionHeader
            title="Corpo Docente"
            subtitle="Professores com formação acadêmica sólida e experiência prática no setor da construção civil."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((professor, index) => (
              <div key={index} className="card-academic p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{professor.name}</h4>
                    <p className="text-sm text-muted-foreground">{professor.formation}</p>
                  </div>
                </div>
                
                <div className="pl-16">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                    Disciplinas
                  </p>
                  <ul className="space-y-1">
                    {professor.disciplines.map((discipline, dIndex) => (
                      <li key={dIndex} className="text-sm text-foreground flex items-start gap-2">
                        <BookOpen className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {discipline}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-card rounded-lg border border-border">
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Observação sobre o Corpo Docente</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Os nomes e informações apresentados são ilustrativos. Para conhecer o corpo 
                  docente atual do programa, consulte os canais oficiais da PUC Minas ou entre 
                  em contato com a coordenação do curso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CoordenacaoDocentes;
