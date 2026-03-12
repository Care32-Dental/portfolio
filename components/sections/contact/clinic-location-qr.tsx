import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useMediaQuery } from "react-responsive";

export default function ClinicLocationQR() {
  const isMobile = useMediaQuery({ maxWidth: "1024px" });
  return (
    <Card className="bg-black/2 backdrop-blur-2xl shadow-lg h-full">
      <CardContent className="h-full flex items-center p-6">
        <div className="grid md:grid-cols-2 gap-6 items-center w-full">
          {/* TEXT SIDE */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-2">Find Care 32 Dental</h3>

            {!isMobile && <p className="text-sm text-muted-foreground mb-5">
              Scan this QR code to instantly open our location in Google Maps
              and get directions to the clinic.
            </p>}

            <div className="text-sm text-muted-foreground mb-4 italic">
              Care32 Dental Clinic <br />
              Bhaktapur, Nepal
            </div>

            <a
              href="https://maps.app.goo.gl/PhArMqF3k7ebXddA7"
              target="_blank"
              className="inline-block px-5 py-2 rounded-full bg-primary text-white text-sm hover:opacity-90 transition"
            >
              Open in Google Maps
            </a>
          </div>

          {/* QR SIDE */}
          {!isMobile ? (
            <div className="flex justify-center">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <Image
                  src="/images/location-qr-code.svg"
                  alt="Clinic location QR code"
                  width={285}
                  height={285}
                />
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
