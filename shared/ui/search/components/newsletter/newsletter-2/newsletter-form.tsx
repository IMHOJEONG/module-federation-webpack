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

export default function NewsLetterForm() {
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
          <div className="grid grid-cols-1 gap-3">
            <Input
              placeholder="Enter your email"
              inputClassName="w-full text-base"
              size="xl"
              rounded="pill"
              {...register("email")}
              error={errors.email?.message}
            />
            <Button
              type="submit"
              className="w-full text-base font-medium"
              size="xl"
              rounded="pill"
            >
              Subscribe
            </Button>
          </div>
        )}
      </Form>
    </>
  );
}
