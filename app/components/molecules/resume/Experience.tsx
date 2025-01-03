interface ExperienceProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export function Experience({
  title,
  company,
  period,
  responsibilities,
}: ExperienceProps) {
  return (
    <div className="relative pl-6 sm:pl-10 group">
      {/* Vertical line with improved responsiveness */}
      <div className="absolute h-full bg-border/60 dark:bg-border/30 border-[1px] opacity-55 border-gray-950 top-2 left-[9px] sm:left-[9.5px] z-0"></div>
      <div className="absolute left-[10px] top-[6px] -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-white border rounded-full border-gray-950 transition-transform duration-300 ease-in-out group-hover:scale-105 z-20" />
      <div className="space-y-1.5">
        <h3 className="text-sm sm:text-base md:text-lg font-ubuntubold text-foreground">
          {company}
        </h3>
        <h3 className="text-xs sm:text-sm md:text-base font-ubunturegular text-foreground transition-colors duration-300 italic">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-900 font-ubunturegular text-muted-foreground/80 bg-gray-300 p-1 px-2 sm:px-3 rounded-lg inline-block">
          {period}
        </p>
        <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1 pb-4 sm:pb-6">
          {responsibilities.map((responsibility, index) => (
            <li
              key={index}
              className="group-hover:text-muted-foreground/90 transition-colors duration-300"
            >
              {responsibility}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}