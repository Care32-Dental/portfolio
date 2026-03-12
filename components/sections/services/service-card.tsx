import { ServiceDetailsProps } from "./service-tab";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ServiceCardProps extends ServiceDetailsProps {
  title: string;
}

export default function ServiceCard(props: ServiceCardProps) {
  return (
    <Card
      className="
        bg-white/40 dark:bg-neutral-900/70
        backdrop-blur-xl
        border border-black/10
        rounded-2xl
        shadow-sm
        min-h-137.5
      "
    >
      <CardHeader className="pb-0">
        <CardTitle className="text-lg">{props.title}</CardTitle>
        <CardDescription className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          {props.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5">        
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
            Procedure
          </h4>

          <ul className="space-y-2">
            {props.process.map((step, idx) => (
              <li key={step} className="flex items-start gap-3">
                <span
                  className="
                    mt-1 flex h-5 w-5 items-center justify-center
                    rounded-full bg-primary/15 text-primary
                    text-[11px] font-semibold
                  "
                >
                  {idx + 1}
                </span>

                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                  {step}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          <div
            className="
              rounded-full px-3 py-1 text-xs font-medium
              bg-primary/10 text-primary
            "
          >
            ⏱ {props.duration}
          </div>

          <div
            className="
              rounded-full px-3 py-1 text-xs font-medium
              bg-emerald-500/10 text-primary
            "
          >
            💚 {props.recovery}
          </div>
        </div>

        {props.recommendedFor.length > 0 && (
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
              Recommended For
            </h4>

            <div className="flex flex-wrap gap-2">
              {props.recommendedFor.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full px-3 py-1 text-xs font-medium
                    bg-neutral-200/70 dark:bg-neutral-800/70
                    text-neutral-700 dark:text-neutral-300
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
