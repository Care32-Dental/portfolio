import { Calendar, HeartPlus } from "lucide-react";

export interface ServiceDetailsProps {
  description: string;
  process: string[];
  duration: string;
  recovery: string;
  recommendedFor: string[];
}

export default function ServiceTab(props: ServiceDetailsProps) {
  return (
    <div className="text-muted-foreground">
      <p className="text-sm text max-w-200">{props.description}</p>

      <div className="flex items-center gap-6 mt-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-primary" />
          <span className="font-medium text-foreground">{props.duration}</span>
          <span>Duration</span>
        </div>

        <div className="flex items-center gap-2">
          <HeartPlus className="h-4 w-4 text-primary" />
          <span className="font-medium text-foreground">{props.recovery}</span>
          <span>Recovery</span>
        </div>
      </div>

      <ul className="mt-8 relative">
        {props.process.map((p, i) => (
          <li key={p} className="flex gap-4 pb-6 last:pb-0">
            {i !== props.process.length - 1 && (
              <span className="absolute left-5 mt-2 h-[50%] w-px bg-primary/40" />
            )}

            <div className="relative z-10 mt-1 h-3 w-3 rounded-full bg-primary" />

            <p className="text-base ml-2 text-muted-foreground leading-relaxed">
              {p}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-10">
        <p className="text-sm font-semibold text-muted-foreground mb-2">
          Recommended for
        </p>

        <div className="flex flex-wrap gap-2">
          {props.recommendedFor.map((item) => (
            <span
              key={item}
              className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
