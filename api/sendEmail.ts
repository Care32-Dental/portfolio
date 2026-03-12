import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_7t4vxwo";
const TEMPLATE_ID = "template_4ohw4rc";
const PUBLIC_KEY = "B8pXuY23f--MVUCmE";

export const sendEmail = async (content: {
  fullName: string;
  email?: string;
  phoneNumber: string;
  preferredTime?: string;
  message?: string;
}): Promise<{ status: number; text: string }> => {
  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, content, {
      publicKey: PUBLIC_KEY,
    });
    return response;
  } catch (err) {
    console.error(err);
    return { status: 500, text: err as string };
  }
};
