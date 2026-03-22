import CommonSection from "@/components/custom/common-section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DOCTOR_TESTIMONIALS } from "@/lib/constant";
import DoctorTestimonial from "./testimonial-card";

export default function Testimonials() {
  return (
    <CommonSection
      id="testimonials"
      title="Testimonials"
      subtitle="what our doctors say"
      description="Hear directly from our specialists about their approach, values, and commitment to patient care."
    >
      {/* Carousel fills full width of the section */}
      <Carousel opts={{ align: "start", loop: true }} className="w-full p-4">
        <CarouselContent className="-ml-6">
          {DOCTOR_TESTIMONIALS.map((testimonial) => (
            <CarouselItem
              key={testimonial.id}
              className="pl-6 basis-full md:basis-1/2"
            >
              {/* Card wrapper */}
              <div className="h-full rounded-2xl border p-6">
                <DoctorTestimonial
                  image={testimonial.image}
                  name={testimonial.name}
                  quote={testimonial.quote}
                  speciality={testimonial.speciality}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation arrows */}
        <div className="mt-8 flex items-cente justify-center md:justify-end gap-3">
          <CarouselPrevious className="relative left-0 top-0 translate-y-0 h-10 w-10 rounded-full border border-teal-200 bg-white text-teal-600 hover:bg-teal-50 hover:border-teal-400 shadow-sm" />
          <CarouselNext className="relative right-0 top-0 translate-y-0 h-10 w-10 rounded-full border border-teal-200 bg-white text-teal-600 hover:bg-teal-50 hover:border-teal-400 shadow-sm" />
        </div>
      </Carousel>
    </CommonSection>
  );
}
