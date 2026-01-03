import { GraduationCap } from "lucide-react";

const ENROLLMENT_LINK = "https://vemprapuc.pucminas.br/construcao-de-edificios-ead-com-videoaulas";

const EnrollmentButton = () => {
  return (
    <a
      href={ENROLLMENT_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold text-sm"
    >
      <GraduationCap className="w-5 h-5" />
      <span>Faça Sua Inscrição Agora</span>
    </a>
  );
};

export default EnrollmentButton;