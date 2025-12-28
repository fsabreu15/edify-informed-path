import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { BookOpen, Layers } from "lucide-react";

const EstruturaCurricular = () => {
  const modules = [
    {
      name: "Módulo I - Fundamentos da Construção",
      disciplines: [
        { name: "Materiais de Construção Aplicados", hours: 30 },
        { name: "Sistemas Estruturais de Edifícios", hours: 30 },
        { name: "Tecnologia das Fundações", hours: 30 },
      ]
    },
    {
      name: "Módulo II - Sistemas Construtivos",
      disciplines: [
        { name: "Vedações e Revestimentos", hours: 30 },
        { name: "Instalações Prediais", hours: 30 },
        { name: "Impermeabilização e Patologias", hours: 30 },
      ]
    },
    {
      name: "Módulo III - Gestão e Planejamento",
      disciplines: [
        { name: "Planejamento e Controle de Obras", hours: 30 },
        { name: "Gestão de Custos na Construção", hours: 30 },
        { name: "Gestão de Qualidade e Normas Técnicas", hours: 30 },
      ]
    },
    {
      name: "Módulo IV - Temas Avançados",
      disciplines: [
        { name: "Sustentabilidade na Construção Civil", hours: 30 },
        { name: "Inovações Tecnológicas e BIM", hours: 30 },
        { name: "Trabalho de Conclusão de Curso", hours: 30 },
      ]
    },
  ];

  const totalHours = modules.reduce(
    (acc, module) => acc + module.disciplines.reduce((sum, d) => sum + d.hours, 0),
    0
  );

  return (
    <Layout>
      {/* Page Header */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Estrutura Curricular
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Conheça a organização das disciplinas e módulos que compõem o programa 
              de especialização em Construção de Edifícios.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="card-academic p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Layers className="w-7 h-7 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-1">{modules.length}</p>
              <p className="text-muted-foreground">Módulos</p>
            </div>
            
            <div className="card-academic p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-1">
                {modules.reduce((acc, m) => acc + m.disciplines.length, 0)}
              </p>
              <p className="text-muted-foreground">Disciplinas</p>
            </div>
            
            <div className="card-academic p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">h</span>
              </div>
              <p className="text-3xl font-bold text-primary mb-1">{totalHours}</p>
              <p className="text-muted-foreground">Horas Totais</p>
            </div>
          </div>

          <SectionHeader
            title="Organização dos Módulos"
            subtitle="O currículo é organizado em módulos temáticos progressivos, proporcionando uma formação estruturada e abrangente."
          />
        </div>
      </section>

      {/* Modules Section */}
      <section className="pb-16 md:pb-24">
        <div className="section-container">
          <div className="space-y-8">
            {modules.map((module, moduleIndex) => (
              <div key={moduleIndex} className="card-academic overflow-hidden">
                <div className="bg-primary/5 px-6 py-4 border-b border-border">
                  <h3 className="text-lg font-semibold text-foreground">
                    {module.name}
                  </h3>
                </div>
                <div className="divide-y divide-border">
                  {module.disciplines.map((discipline, disciplineIndex) => (
                    <div 
                      key={disciplineIndex}
                      className="px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors duration-200"
                    >
                      <span className="text-foreground">{discipline.name}</span>
                      <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        {discipline.hours}h
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-secondary/50 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground mb-3">Observações</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                A estrutura curricular apresentada é ilustrativa e pode sofrer alterações conforme decisões acadêmicas.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                Consulte os canais oficiais da PUC Minas para informações atualizadas sobre a grade curricular.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                A carga horária de cada disciplina pode ser ajustada conforme planejamento acadêmico.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default EstruturaCurricular;
