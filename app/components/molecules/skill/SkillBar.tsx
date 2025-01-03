interface SkillBarProps {
  name: string;
  percentage: number;
}

export function SkillBar({ name, percentage }: SkillBarProps) {
  return (
    <div className="mt-2 ">
      <div className="flex justify-between items-center">
        <span className="text-subtitle font-ubuntulight text-foreground">{name}</span>
        <span className="text-sm font-medium text-muted-foreground">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-100 h-4 rounded-sm">
        <div
          className="bg-[#05C7AE] h-4 transition-all rounded-sm duration-500 !opacity-100 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
