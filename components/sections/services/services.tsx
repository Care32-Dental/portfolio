import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SERVICES } from "@/lib/constant";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { SplitText } from "gsap/all";
import ServiceTab from "./service-tab";
import ServiceCard from "./service-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Services() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [activeTab, setActiveTab] = useState(SERVICES[0].name);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        requestAnimationFrame(() => {
          if (!contentRef.current) return;

          const title = contentRef.current.querySelector(".service-title");
          const serviceParagraph =
            contentRef.current.querySelector(".service-details");

          if (!title || !serviceParagraph) return;
          const titleSplit = new SplitText(title, {
            type: "chars, words",
          });

          const timeline = gsap.timeline();

          timeline.from(titleSplit.chars, {
            opacity: 0,
            xPercent: -20,
            stagger: 0.02,
            ease: "expo.inOut",
          });

          timeline.from(serviceParagraph, {
            opacity: 0,
            duration: 0.5,
            ease: "expo.inOut",
          });
        });
      }, contentRef);

      return () => ctx.revert();
    },
    { dependencies: [activeTab] },
  );

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      {isMobile ? (
        <div className="flex flex-col gap-3 p-4 mt-6">
          <Carousel
            setApi={setApi}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            opts={{
              loop: true,
              align: "start",
            }}
          >
            <CarouselContent>
              {SERVICES.map((service) => (
                <CarouselItem key={service.id}>
                  <ServiceCard
                    key={service.id}
                    title={service.name}
                    description={service.description}
                    duration={service.duration}
                    process={service.process}
                    recovery={service.recovery}
                    recommendedFor={service.recommendedFor}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="text-muted-foreground py-2 text-center text-sm flex gap-2 justify-center items-center">
            {Array.from({ length: count }).map((_, idx) => (
              <div
                key={idx}
                className={`h-2 w-2 bg-muted-foreground rounded-full transition-all duration-500 ${current - 1 === idx ? "scale-125 bg-primary" : ""}`}
              ></div>
            ))}
          </div>
        </div>
      ) : (
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          orientation="vertical"
          className="mt-10 flex"
          id="services-tab"
        >
          <TabsList className="flex flex-col gap-1 bg-black/2 backdrop-blur-xl border border-neutral-200 dark:border-white/10 rounded-2xl p-2 shadow-sm w-full max-w-xs">
            {SERVICES.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.name}
                className="group relative w-full justify-start rounded-xl px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 transition-all duration-300 cursor-pointer hover:bg-primary/10 hover:text-primary data-[state=active]:bg-primary/15 data-[state=active]:text-primary"
              >
                <span
                  className=" absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1.5 rounded-r-full bg-primary opacity-0 transition-opacity  duration-300 data-[state=active]:opacity-100"
                />

                <span className="ml-2">{service.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {SERVICES.map((service) => (
            <TabsContent
              key={service.id}
              value={service.name}
              className="px-20 flex-3"
            >
              <div
                ref={service.name === activeTab ? contentRef : null}
                className="flex flex-col gap-2"
              >
                <h1 className="service-title font-extrabold text-4xl tracking-tighter">
                  {service.name}
                </h1>
                <div className="service-details">
                  <ServiceTab
                    description={service.description}
                    duration={service.duration}
                    process={service.process}
                    recovery={service.recovery}
                    recommendedFor={service.recommendedFor}
                  />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}
    </>
  );
}
