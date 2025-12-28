interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionHeader = ({ title, subtitle, centered = false }: SectionHeaderProps) => {
  return (
    <div className={`mb-8 md:mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
