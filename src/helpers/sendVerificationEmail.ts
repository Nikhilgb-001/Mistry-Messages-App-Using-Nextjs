import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";

import { ApiResponse } from "@/types/ApiResponse";

export const sendVerificationEmail = async (
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Mystery Messages - Verification Code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { Success: true, message: "Email sent successfully" };
  } catch (emailError) {
    console.error("Error sending email", emailError);
    return {
      Success: false,
      message: "Error sending email",
    };
  }
};
