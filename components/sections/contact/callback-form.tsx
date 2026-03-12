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
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

type CallBackFormValues = z.infer<typeof callbackFormSchema>;

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
        const successMessage = values?.preferredTime
          ? "Thank you for submitting your information. We will follow up with you at your preferred time."
          : "Thank you for submitting your information. We will follow up with you as soon as possible.";

        toast.success(successMessage);
      } else {
        toast.info(
          "We were unable to deliver the email at the moment. Feel free to reach us directly by phone or email at your convenience.",
        );
      }
    } catch (error) {
      console.error(error);
      toast.error(
        "Something went wrong. Please try again or contact us directly by phone or email.",
      );
    } finally {
      setSendingEmail(false);
      form.reset(undefined, { keepErrors: false });
    }
  };
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <p className="text-muted-foreground text-sm mb-4 lg:hidden">
        Provide your contact details and we&apos;ll get back to you as soon as
        possible.
      </p>
      <FieldGroup className="flex flex-col gap-5">
        {/* Row 1: Full Name + Email */}
        <div className="grid lg:grid-cols-2 gap-4">
          <Controller
            name="fullName"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Full Name *</FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your name"
                  autoComplete="off"
                  className="border border-neutral-400/50"
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
                <FieldLabel>Email</FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter your email"
                  autoComplete="off"
                  className="border border-neutral-400/50"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* Row 2: Phone Number + Preferred Time */}
        <div className="grid lg:grid-cols-2 gap-4">
          <Controller
            name="phoneNumber"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel>Phone Number *</FieldLabel>
                <Input
                  {...field}
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter Phone Number"
                  autoComplete="off"
                  className="border border-neutral-400/50"
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
                <FieldLabel>Preferred Time</FieldLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="border border-neutral-400/50">
                    <SelectValue placeholder="When do you want us to call you?" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="Morning">
                      Morning (7:00 AM - 10:00 AM)
                    </SelectItem>
                    <SelectItem value="Afternoon">
                      Afternoon (11:00 AM - 4:00 PM)
                    </SelectItem>
                    <SelectItem value="Evening">
                      Evening (6:00 PM - 8:00 PM)
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
              <FieldLabel>Message</FieldLabel>
              <Textarea
                {...field}
                aria-invalid={fieldState.invalid}
                placeholder="Enter your message..."
                autoComplete="off"
                className="border border-neutral-400/50"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-primary w-full md:w-fit rounded-full uppercase cursor-pointer flex items-center"
            disabled={sendingEmail}
          >
            {sendingEmail ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <></>
            )}
            Request Callback
          </Button>
        </div>
        <p className="text-muted-foreground text-sm">
          You can expect a call within a day
        </p>
      </FieldGroup>
    </form>
  );
}
