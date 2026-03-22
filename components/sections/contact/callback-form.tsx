import { sendEmail } from "@/api/sendEmail";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { callbackFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2, PhoneCall } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

type CallBackFormValues = z.infer<typeof callbackFormSchema>;

// Shared input className
const inputCls =
  "bg-white border border-slate-200 rounded-xl h-11 px-4 text-sm text-slate-800 placeholder:text-slate-400 " +
  "transition-all duration-200 " +
  "focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 " +
  "data-[invalid=true]:border-red-400 data-[invalid=true]:ring-red-400/20";

export default function CallBackForm() {
  const [sendingEmail, setSendingEmail] = useState<boolean>(false);
  const form = useForm<CallBackFormValues>({
    resolver: zodResolver(callbackFormSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: CallBackFormValues) => {
    setSendingEmail(true);
    try {
      const response = await sendEmail(values);
      if (response?.status === 200) {
        toast.success(
          values?.preferredTime
            ? "Thank you! We'll call you at your preferred time."
            : "Thank you! We'll follow up as soon as possible."
        );
      } else {
        toast.info(
          "Unable to send right now. Feel free to reach us directly by phone or email."
        );
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again or contact us directly.");
    } finally {
      setSendingEmail(false);
      form.reset(undefined, { keepErrors: false });
    }
  };

  return (
    <div className="rounded-2xl border border-slate-100 bg-white/80 backdrop-blur-sm shadow-[0_4px_32px_0_rgba(20,100,80,0.08)] overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 w-full bg-linear-to-r from-primary/50 via-primary/80 to-primary" />

      <div className="px-6 py-7 md:px-8 md:py-8">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup className="flex flex-col gap-5">

            {/* Row 1: Full Name + Email */}
            <div className="grid lg:grid-cols-2 gap-4">
              <Controller
                name="fullName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1.5">
                      Full Name <span className="text-primary">*</span>
                    </FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="Your full name"
                      autoComplete="off"
                      className={inputCls}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1.5">
                      Email
                    </FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="your@email.com"
                      autoComplete="off"
                      className={inputCls}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            {/* Row 2: Phone + Preferred Time */}
            <div className="grid lg:grid-cols-2 gap-4">
              <Controller
                name="phoneNumber"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1.5">
                      Phone Number <span className="text-primary">*</span>
                    </FieldLabel>
                    <Input
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="98XXXXXXXX"
                      autoComplete="off"
                      className={inputCls}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="preferredTime"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1.5">
                      Preferred Time
                    </FieldLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className={inputCls + " w-full h-11!"}>
                        <SelectValue placeholder="When should we call?" />
                      </SelectTrigger>
                      <SelectContent position="popper">
                        <SelectItem value="Morning">
                          Morning (7:00 AM – 10:00 AM)
                        </SelectItem>
                        <SelectItem value="Afternoon">
                          Afternoon (11:00 AM – 4:00 PM)
                        </SelectItem>
                        <SelectItem value="Evening">
                          Evening (6:00 PM – 8:00 PM)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            {/* Row 3: Message */}
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1.5">
                    Message
                  </FieldLabel>
                  <Textarea
                    {...field}
                    aria-invalid={fieldState.invalid}
                    placeholder="Any specific concerns or questions for our team..."
                    autoComplete="off"
                    className={
                      inputCls +
                      " h-24 resize-none py-3 leading-relaxed"
                    }
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Submit row */}
            <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
              {/* Trust note */}
              <p className="flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 size={14} className="text-primary shrink-0" />
                We&apos;ll get back to you within a day
              </p>

              {/* Button */}
              <Button
                type="submit"
                disabled={sendingEmail}
                className="bg-primary hover:bg-primary/90 text-white rounded-xl px-6 h-11 text-sm font-semibold uppercase tracking-wide cursor-pointer flex items-center gap-2 transition-all shadow-[0_4px_14px_0_rgba(20,100,20,0.25)] hover:shadow-[0_6px_20px_0_rgba(20,100,20,0.35)] hover:-translate-y-0.5"
              >
                {sendingEmail ? (
                  <Loader2 className="animate-spin" size={16} />
                ) : (
                  <PhoneCall size={15} />
                )}
                Request Callback
              </Button>
            </div>

          </FieldGroup>
        </form>
      </div>
    </div>
  );
}