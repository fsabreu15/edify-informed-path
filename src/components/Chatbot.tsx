import { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

const ENROLLMENT_LINK = "https://vemprapuc.pucminas.br/construcao-de-edificios-ead-com-videoaulas";

const faqData = [
  {
    question: "Quem pode fazer o curso?",
    answer: "O curso é destinado a Engenheiros Civis, Arquitetos e Urbanistas, Engenheiros de Produção, demais engenheiros, tecnólogos em áreas de engenharia, administradores e profissionais de áreas afins com formação superior. É especialmente indicado para profissionais experientes que buscam aprimoramento técnico avançado."
  },
  {
    question: "Como são as aulas?",
    answer: "O curso é 100% EAD, com videoaulas gravadas pelos professores. As aulas são assíncronas, permitindo que você estude no seu próprio ritmo. O material inclui videoaulas, leituras complementares e atividades práticas no ambiente virtual de aprendizagem."
  },
  {
    question: "Qual a carga horária?",
    answer: "O curso possui 360 horas de formação, distribuídas em 15 disciplinas de 24 horas cada. Os temas abrangem BIM, Lean Construction, estruturas, gestão de obras, patologias e muito mais."
  },
  {
    question: "Precisa de TCC?",
    answer: "Não! O TCC é opcional e pode ser contratado separadamente. A aprovação depende de obter no mínimo 70% em cada disciplina, através de provas online e atividades avaliativas."
  },
  {
    question: "O curso é básico?",
    answer: "Não, este é um programa de pós-graduação avançado! O curso aborda temas de forma aprofundada, incluindo tecnologias de ponta como BIM, SHM (Monitoramento de Saúde Estrutural), drones, laser scanners e metodologias ágeis. É ideal para profissionais experientes que buscam diferenciação no mercado."
  },
  {
    question: "Há desconto para ex-alunos?",
    answer: `Sim! Ex-alunos da PUC Minas têm desconto especial nas mensalidades. Acesse o portal oficial para conferir valores e condições: ${ENROLLMENT_LINK}`
  },
  {
    question: "Como me inscrevo?",
    answer: `As inscrições são feitas exclusivamente pelo portal oficial da PUC Minas. Acesse: ${ENROLLMENT_LINK}`
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! 👋 Sou o assistente virtual do curso de Pós-Graduação em Construção de Edifícios. Como posso ajudar?",
      isBot: true
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  const findAnswer = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    // Check for keywords in the question
    for (const faq of faqData) {
      const keywords = faq.question.toLowerCase().split(" ");
      const matchCount = keywords.filter(keyword => 
        keyword.length > 3 && lowerQuestion.includes(keyword)
      ).length;
      
      if (matchCount >= 2 || lowerQuestion.includes(faq.question.toLowerCase().substring(0, 10))) {
        return faq.answer;
      }
    }

    // Keyword-based matching
    if (lowerQuestion.includes("inscrever") || lowerQuestion.includes("inscriç") || lowerQuestion.includes("matricula")) {
      return faqData[6].answer;
    }
    if (lowerQuestion.includes("quem") || lowerQuestion.includes("público") || lowerQuestion.includes("requisito")) {
      return faqData[0].answer;
    }
    if (lowerQuestion.includes("aula") || lowerQuestion.includes("ead") || lowerQuestion.includes("video") || lowerQuestion.includes("online")) {
      return faqData[1].answer;
    }
    if (lowerQuestion.includes("hora") || lowerQuestion.includes("duração") || lowerQuestion.includes("quanto tempo")) {
      return faqData[2].answer;
    }
    if (lowerQuestion.includes("tcc") || lowerQuestion.includes("trabalho de conclus") || lowerQuestion.includes("monografia")) {
      return faqData[3].answer;
    }
    if (lowerQuestion.includes("básico") || lowerQuestion.includes("iniciante") || lowerQuestion.includes("nível") || lowerQuestion.includes("avançado") || lowerQuestion.includes("aprofundad")) {
      return faqData[4].answer;
    }
    if (lowerQuestion.includes("desconto") || lowerQuestion.includes("ex-aluno") || lowerQuestion.includes("egresso")) {
      return faqData[5].answer;
    }

    return `Desculpe, não encontrei uma resposta específica para sua pergunta. Posso ajudar com informações sobre: público-alvo, carga horária, metodologia das aulas, TCC, descontos para ex-alunos e como se inscrever. Para inscrições e informações oficiais, acesse: ${ENROLLMENT_LINK}`;
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false
    };

    const answer = findAnswer(inputValue);
    const botMessage: Message = {
      id: messages.length + 2,
      text: answer,
      isBot: true
    };

    setMessages([...messages, userMessage, botMessage]);
    setInputValue("");
  };

  const handleQuickQuestion = (question: string) => {
    const userMessage: Message = {
      id: messages.length + 1,
      text: question,
      isBot: false
    };

    const faq = faqData.find(f => f.question === question);
    const botMessage: Message = {
      id: messages.length + 2,
      text: faq?.answer || "Informação não disponível.",
      isBot: true
    };

    setMessages([...messages, userMessage, botMessage]);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1 transition-all duration-300 group ${isOpen ? 'scale-0' : 'scale-100'}`}
        aria-label="Abrir chat"
      >
        <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center relative">
          <MessageCircle className="w-8 h-8" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
            <Sparkles className="w-3 h-3" />
          </span>
        </div>
        <span className="text-xs font-semibold text-primary bg-card px-2 py-0.5 rounded-full shadow-md border border-border">
          Dúvidas?
        </span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col max-h-[500px]">
          {/* Header */}
          <div className="promo-banner px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-sm">Assistente Virtual</p>
                <p className="text-xs opacity-80">Tire suas dúvidas</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
              aria-label="Fechar chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[200px] max-h-[280px]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    message.isBot
                      ? 'bg-muted text-foreground rounded-bl-md'
                      : 'bg-primary text-primary-foreground rounded-br-md'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-muted-foreground mb-2">Perguntas frequentes:</p>
              <div className="flex flex-wrap gap-1.5">
                {faqData.slice(0, 4).map((faq, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(faq.question)}
                    className="text-xs px-3 py-1.5 bg-muted hover:bg-primary/10 text-foreground rounded-full transition-colors"
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-border">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Digite sua dúvida..."
                className="flex-1 px-4 py-2.5 bg-muted rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                onClick={handleSend}
                className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity"
                aria-label="Enviar"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;