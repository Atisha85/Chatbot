import { resendClient } from "../lib/resend.js"
import { createWelcomeEmailTemplate } from "./emailTemplate.js";
export const sendWelcomeEmail = async (email, name, clientURL) => {
    const {data, error} = await resendClient.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Welcome to Chatbot!",
        html: createWelcomeEmailTemplate(name, clientURL)
    });

    if(error) {
        console.error("Error sending welcome email:", error);
        throw new Error("Failed to send welcome email");
    }

    console.log("Welcome email sent successfully:", data);
};