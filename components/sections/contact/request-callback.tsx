import CommonSection from "@/components/custom/common-section";
import CallBackForm from "./callback-form";
// import { Card, CardContent } from "@/components/ui/card";
// import ClinicLocationQR from "./clinic-location-qr";

export default function RequestCallback() {
  return (
    <CommonSection
      id="callback"
      title="get a callback"
      subtitle="we'll call you back shortly"
      description="Leave your details and our team will connect with you to assist with your needs and schedule your visit."
    >
      {/* <div className="lg:mt-10 p-4 lg:p-0 items-center"> */}
      {/* <ClinicLocationQR /> */}
      {/* <Card className="bg-black/2 backdrop-blur-2xl shadow-lg border border-slate-300">
          <CardContent> */}
      <div className="px-4 lg:px-0 mt-4">
        <CallBackForm />
      </div>
      {/* </CardContent>
        </Card> */}
      {/* </div> */}
    </CommonSection>
  );
}
