interface TimelineProps {
  children: React.ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute h-full bg-border/60 dark:bg-border/30 border-[1px] opacity-55 border-gray-950 top-2 left-[9.5px] z-0"></div>
      <div className="space-y-3 sm:space-y-4 relative z-10">{children}</div>
    </div>
  );
}
