import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { User, GraduationCap, BookOpen, ExternalLink } from "lucide-react";

const CoordenacaoDocentes = () => {
  const coordinators = [
    {
      name: "Prof. Dr. Rafael Aredes Couto",
      title: "Idealizador e Professor Mentor",
      formation: "Doutor em Engenharia Civil",
      email: "aredes@pucminas.br",
      lattes: "http://lattes.cnpq.br/2011727"
    },
    {
      name: "Prof. Dr. Felipe de Souza Abreu",
      title: "Idealizador do Projeto Pedagógico",
      formation: "Doutor em Engenharia Civil",
      email: "felipeabreu@pucminas.br",
      lattes: "http://lattes.cnpq.br/9887463"
    }
  ];

  const faculty = [
    {
      name: "Prof. Dr. Felipe de Souza Abreu",
      formation: "Doutor",
      disciplines: ["Tecnologia e Processos na Construção I", "Planejamento, Orçamento e Análise Financeira de Obras"]
    },
    {
      name: "Prof. Esp. Leandro Junio Serafim",
      formation: "Especialista",
      disciplines: ["Tecnologias de Captura de Realidade: Drones, Laser Scanner e Câmeras 360°"]
    },
    {
      name: "Profa. Me. Tamiris Ribeiro Narciso",
      formation: "Mestre",
      disciplines: ["Lean Construction e Tecnologia BIM Aplicada"]
    },
    {
      name: "Prof. Me. Kelson Pothin Wolff",
      formation: "Mestre",
      disciplines: ["Fundações para Edifícios"]
    },
    {
      name: "Prof. Dr. Rafael Aredes Couto",
      formation: "Doutor",
      disciplines: ["Projetos de Estruturas de Concreto Armado e Sistemas Pré-Moldados", "Patologias nas Edificações"]
    },
    {
      name: "Profa. Me. Mariana Braga Araújo Rodrigues",
      formation: "Mestre",
      disciplines: ["Leitura e Compatibilização de Projetos BIM"]
    },
    {
      name: "Profa. Me. Luciana Dias Martins da Costa Castro",
      formation: "Mestre",
      disciplines: ["Projeto de Estruturas Metálicas"]
    },
    {
      name: "Prof. Dr. William Luiz Fernandes",
      formation: "Doutor",
      disciplines: ["Monitoramento de Saúde Estrutural (SHM) de Edifícios"]
    },
    {
      name: "Prof. Me. João Felipe Martins Abdala",
      formation: "Mestre",
      disciplines: ["Manutenção e Reforma Predial"]
    }
  ];

  return (
    <Layout>
      {/* Page Header */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="section-container">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-base font-medium mb-6">
              Instituto Politécnico (IPUC) • Departamento de Engenharia Civil
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Coordenação e Docentes
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Conheça o corpo docente qualificado que conduz o programa de 
              Pós-Graduação em Construção de Edifícios.
            </p>
          </div>
        </div>
      </section>

      {/* Coordinators Section */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <SectionHeader
            title="Coordenação do Curso"
            subtitle="Profissionais responsáveis pela concepção e organização acadêmica do programa."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coordinators.map((coordinator, index) => (
              <div key={index} className="card-academic p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <User className="w-12 h-12 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {coordinator.name}
                  </h3>
                  <p className="text-accent font-medium mb-4">{coordinator.title}</p>
                  
                  <div className="space-y-2 text-sm w-full">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground">
                      <GraduationCap className="w-4 h-4" />
                      <span>{coordinator.formation}</span>
                    </div>
                    
                    <a 
                      href={coordinator.lattes}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Currículo Lattes</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 md:py-20 section-alt">
        <div className="section-container">
          <SectionHeader
            title="Corpo Docente"
            subtitle="Professores com formação acadêmica sólida e experiência no setor da construção civil."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faculty.map((professor, index) => (
              <div key={index} className="card-academic p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">{professor.name}</h4>
                    <p className="text-sm text-muted-foreground">{professor.formation}</p>
                  </div>
                </div>
                
                <div className="pl-16">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                    Disciplinas
                  </p>
                  <ul className="space-y-2">
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

          <div className="mt-12 bg-card rounded-lg border border-border p-6">
            <p className="text-muted-foreground text-center leading-relaxed">
              O corpo docente é composto por profissionais com titulação de especialistas, 
              mestres e doutores, todos com experiência acadêmica e prática no setor da 
              construção civil. As disciplinas compartilhadas (BIM, Metodologias Ágeis e 
              Gestão de Projetos) contam com professores especializados nessas áreas.
            </p>
          </div>
        </div>
      </section>

      {/* Institution Info */}
      <section className="py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Vinculação Institucional"
              subtitle="O curso está vinculado ao Instituto Politécnico da PUC Minas."
            />
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl border border-border p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Instituto Politécnico (IPUC)
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  O Instituto Politécnico da PUC Minas é reconhecido pela excelência 
                  em formação de engenheiros e profissionais da área tecnológica, 
                  com tradição em ensino, pesquisa e extensão na área da construção civil.
                </p>
              </div>

              <div className="bg-card rounded-xl border border-border p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Diretoria de Educação Continuada (IEC)
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  O curso é oferecido pela Diretoria de Educação Continuada da PUC Minas, 
                  responsável pelos programas de pós-graduação lato sensu da instituição, 
                  com infraestrutura consolidada para ensino a distância.
                </p>
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
              Estude com Especialistas
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Aprenda com professores qualificados e experientes no setor 
              da construção civil.
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

export default CoordenacaoDocentes;