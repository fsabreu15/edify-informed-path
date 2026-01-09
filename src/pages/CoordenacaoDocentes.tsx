import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import SEO from "@/components/SEO";
import { User, GraduationCap, BookOpen, ExternalLink } from "lucide-react";
import buildingFacade from "@/assets/building-facade.jpg";
import coordRafael from "@/assets/coord-rafael.png";
import coordFelipe from "@/assets/coord-felipe.jpg";

const CoordenacaoDocentes = () => {
  const coordinators = [
    {
      name: "Prof. Dr. Rafael Aredes Couto",
      title: "Idealizador e Professor Mentor",
      formation: "Doutor em Engenharia Civil",
      email: "aredes@pucminas.br",
      lattes: "http://lattes.cnpq.br/9887463456871299",
      photo: coordRafael
    },
    {
      name: "Prof. Dr. Felipe de Souza Abreu",
      title: "Idealizador do Projeto Pedagógico",
      formation: "Doutor em Engenharia Civil",
      email: "felipeabreu@pucminas.br",
      lattes: "http://lattes.cnpq.br/2011727700246315",
      photo: coordFelipe
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
      <SEO 
        title="Coordenação e Docentes | Pós-Graduação Construção de Edifícios"
        description="Conheça os coordenadores e professores do curso. Corpo docente qualificado com doutores e mestres. Inscreva-se na pós-graduação PUC Minas."
        keywords="professores pós-graduação engenharia, coordenação curso construção, docentes especialização, corpo docente PUC Minas, professores engenharia civil, inscrição curso pós-graduação, matricula especialização, doutores engenharia civil"
        canonicalPath="/coordenacao-docentes"
      />
      {/* Page Header */}
      <section className="relative min-h-[50vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${buildingFacade})` }}
        >
          <div className="absolute inset-0 hero-gradient opacity-90" />
        </div>
        <div className="section-container relative z-10 py-16 md:py-24">
          <div className="max-w-3xl animate-fade-in">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-base font-medium mb-6">
              Pós-Graduação • Construção de Edifícios
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              Coordenação e Docentes
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed text-left">
              Conheça o corpo docente qualificado que conduz o programa de 
              Pós-Graduação em Construção de Edifícios.
            </p>
          </div>
        </div>
      </section>

      {/* Coordinators Section */}
      <section className="py-10 md:py-14">
        <div className="section-container">
          <SectionHeader
            title="Coordenação do Curso"
            subtitle="Profissionais responsáveis pela concepção e organização acadêmica do programa."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coordinators.map((coordinator, index) => (
              <div key={index} className="card-academic p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-primary/20 shadow-lg">
                    <img 
                      src={coordinator.photo} 
                      alt={coordinator.name}
                      className="w-full h-full object-cover"
                    />
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
      <section className="py-10 md:py-14 section-alt">
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

      {/* Disclaimer Section */}
      <section className="py-10 md:py-14">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Sobre Este Site
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Este site é uma <strong>página informativa complementar</strong>, desenvolvida 
                    para divulgação do curso de Pós-Graduação em Construção de Edifícios. 
                    <strong> Não se trata de um site institucional da PUC Minas</strong>. 
                    Para inscrições, valores, documentação e informações oficiais, 
                    consulte sempre os canais oficiais da instituição.
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
              Estude com Especialistas
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8 text-center">
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