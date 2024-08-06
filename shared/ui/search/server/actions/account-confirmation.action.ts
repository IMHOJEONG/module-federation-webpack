import AccountConfirmationEmail from "@/email-templates/account-confirmation";
// @FIXME: Not working
// @ts-ignore
import { sendEmail } from "@/email-templates/email";
import { render } from "@react-email/render";

export const sendAccountConfirmationEmail = async (data: { email: string }) => {
  const to = `John Doe<${data.email}>`;

  await sendEmail({
    to: to,
    subject: "Your Account is Created!",
    html: render(AccountConfirmationEmail(data.email)),
  });

  return true;
};
