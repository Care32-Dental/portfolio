import CommonSection from "@/components/custom/common-section";
import CallBackForm from "./callback-form";
import { Card, CardContent } from "@/components/ui/card";
import ClinicLocationQR from "./clinic-location-qr";

export default function RequestCallback() {
  return (
    <CommonSection id="callback" title="get in touch" imageSource="/images/backgrounds/background-5.jpg" objectPosition="center">
      <div className="grid lg:grid-cols-2 gap-4 lg:gap-10 lg:mt-10 p-4 lg:p-0 items-center">
        <ClinicLocationQR />
        <Card className="bg-black/2 backdrop-blur-2xl shadow-lg border border-slate-300">
          <CardContent>
            <CallBackForm />
          </CardContent>
        </Card>
      </div>
    </CommonSection>
  );
}
