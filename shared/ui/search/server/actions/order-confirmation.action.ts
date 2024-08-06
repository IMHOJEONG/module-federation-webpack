import OrderConfirmationEmail from "@/email-templates/order-confirmation";
// @FIXME: Not working
// @ts-ignore
import { sendEmail } from "@/email-templates/email";
import { render } from "@react-email/render";

export const sendOrderConfirmationEmail = async (data: { email: string }) => {
  const to = `John Doe<${data.email}>`;

  sendEmail({
    to: to,
    subject: "Your Order is Confirmed! - Isomorphic",
    html: render(OrderConfirmationEmail()),
  });

  return true;
};
