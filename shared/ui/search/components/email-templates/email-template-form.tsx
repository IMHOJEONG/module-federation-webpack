import {
  EmailTemplateInput,
  emailTemplateSchema,
} from "@/validators/email-template.schema";
// import { sendAccountConfirmationEmail } from "@/server/actions/account-confirmation.action";
// import { sendOrderConfirmationEmail } from "@/server/actions/order-confirmation.action";
import { useModal } from "@/components/modal-views/use-modal";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { messages } from "@/config/messages";
import { toast } from "react-hot-toast";
import { Button, Input } from "rizzui";
import PiX from "react-icons/pi/PiX";
import { useState } from "react";

export default function EmailTemplateForm({ template }: { template: string }) {
  const { closeModal } = useModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailTemplateInput>({
    resolver: zodResolver(emailTemplateSchema),
  });

  const onSubmit: SubmitHandler<EmailTemplateInput> = async (
    inputs: EmailTemplateInput
  ) => {
    setIsLoading(true);
    try {
      // if (template === "accountConfirmation") {
      //   await sendAccountConfirmationEmail(inputs);
      // }
      // if (template === "orderConfirmation") {
      //   await sendOrderConfirmationEmail(inputs);
      // }
      reset();
      setIsLoading(false);
      closeModal();
      toast.success(messages.emailSentSuccessfully);
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 p-6">
      <div className="col-span-full flex items-center justify-between">
        <h3>Get this Template in your Inbox</h3>
        <button type="button" onClick={closeModal}>
          <PiX />
        </button>
      </div>
      <Input
        label="Name"
        placeholder="Enter your name"
        {...register("name")}
        error={errors.name?.message as string}
      />
      <Input
        type="email"
        label="Email"
        placeholder="Enter your email"
        {...register("email")}
        error={errors.email?.message as string}
      />
      <Button isLoading={isLoading} type="submit" size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
