interface EducationProps {
  degree: string;
  school: string;
  period: string;
}

export function Education({ degree, school, period }: EducationProps) {
  return (
    <div className="relative pl-6 sm:pl-10 group">
      <div className="absolute left-[10px] top-[6px] -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-white border rounded-full border-gray-950 transition-transform duration-300 ease-in-out group-hover:scale-105 z-20"></div>
      <div className="space-y-1">
        <h3 className="text-sm sm:text-base md:text-lg font-ubuntubold text-foreground">
          {degree}
        </h3>
        <p className="text-xs sm:text-sm text-gray-900 font-ubunturegular text-muted-foreground/80 bg-gray-300 p-1 px-2 sm:px-3 rounded-lg inline-block">
          {period}
        </p>
        <p className="text-xs sm:text-sm font-ubunturegular text-muted-foreground opacity-50 italic">
          {school}
        </p>
      </div>
    </div>
  );
}
