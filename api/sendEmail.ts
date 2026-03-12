import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_sxvvs3a";
const TEMPLATE_ID = "template_xpdx5hu";
const PUBLIC_KEY = "gj2e-L8xwDVMePXsr";

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
