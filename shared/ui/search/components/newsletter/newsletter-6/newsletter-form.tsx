import {
  NewsLetterFormSchema,
  newsLetterFormSchema,
} from "@/validators/newsletter.schema";
import { SubmitHandler } from "react-hook-form";
import { Button, Input } from "rizzui";
import { useState } from "react";
import { Form } from "@ui/form";

const initialValues = {
  email: "",
};

export default function NewsLetterForm({ className }: { className?: string }) {
  const [reset, setReset] = useState({});

  const onSubmit: SubmitHandler<NewsLetterFormSchema> = (data) => {
    console.log(data);
    setReset(initialValues);
  };
  return (
    <>
      <Form<NewsLetterFormSchema>
        validationSchema={newsLetterFormSchema}
        resetValues={reset}
        onSubmit={onSubmit}
        useFormProps={{
          defaultValues: initialValues,
        }}
      >
        {({ register, formState: { errors } }) => (
          <div className="w-full @[710px]:max-w-[640px]">
            <Input
              placeholder="Enter your email"
              inputClassName="w-full text-base"
              size="xl"
              {...register("email")}
              error={errors.email?.message}
            />
            <Button
              type="submit"
              className="mt-3 w-full text-base font-medium"
              size="xl"
            >
              Subscribe
            </Button>
          </div>
        )}
      </Form>
    </>
  );
}
