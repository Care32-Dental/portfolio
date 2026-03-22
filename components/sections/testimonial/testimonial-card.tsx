import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface DoctorTestimonialProps {
  image: string;
  name: string;
  quote: string;
  speciality: string;
}

export default function DoctorTestimonial({
  image,
  name,
  quote,
  speciality,
}: DoctorTestimonialProps) {
  return (
    <div className="relative w-full px-2 py-4">
      {/* Large decorative background quote mark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-2 left-4 select-none text-[160px] leading-none text-primary/30"
        style={{ fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1 }}
      >
        &apos;
      </span>

      <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:gap-12">
        {/* Left: Doctor identity */}
        <div className="flex flex-col items-center gap-4 sm:w-52 sm:shrink-0">
          {/* Avatar with glow ring */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-linear-to-br from-primary/30 to-primary/10 blur-md" />
            <div className="absolute -inset-1.5 rounded-full border border-primary/70" />
            <Avatar className="relative h-28 lg:h-44 w-28 lg:w-44 shadow-xl ring-2 ring-white">
              <AvatarImage src={image} alt={name} className="object-cover" />
              <AvatarFallback
                className="bg-teal-50 text-teal-700 text-2xl font-semibold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {name
                  .replace(/^Dr\.\s*/i, "")
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Name & specialty */}
          <div className="text-center">
            <p
              className="text-[15px] font-bold text-slate-800 leading-snug"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {name}
            </p>
            <span className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary border border-primary/30">
              {speciality}
            </span>
          </div>
        </div>

        {/* Vertical divider (desktop) */}
        <div className="hidden sm:block w-px self-stretch bg-linear-to-b from-transparent via-primary to-transparent" />
        {/* Horizontal divider (mobile) */}
        <div className="block sm:hidden h-px w-16 mx-auto bg-linear-to-r from-transparent via-primary to-transparent" />

        {/* Right: Quote */}
        <div className="flex-1">
          <p
            className="text-[17px] leading-[1.9] text-slate-600 italic"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {quote}
          </p>

          {/* Trailing dot-dash accent */}
          <div className="mt-5 flex items-center gap-2">
            <span className="h-0.5 w-8 rounded-full bg-primary" />
            <span className="h-0.5 w-4 rounded-full bg-primary/60" />
            <span className="h-1 w-1 rounded-full bg-primary/40" />
          </div>
        </div>
      </div>
    </div>
  );
}