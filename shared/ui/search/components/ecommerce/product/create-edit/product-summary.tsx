import {
  categoryOption,
  typeOption,
} from "@/components/ecommerce/product/create-edit/form-utils";
import { Controller, useFormContext } from "react-hook-form";
import SelectLoader from "@components/loader/select-loader";
import QuillLoader from "@components/loader/quill-loader";
import FormGroup from "@/components/form-group";
import cn from "@utils/class-names";
import { Input } from "rizzui";
import { lazy, Suspense } from "react";
// const Select = dynamic(() => import('rizzui').then((mod) => mod.Select), {
//   ssr: false,
//   loading: () => <SelectLoader />,
// });

// @ts-ignore
const Select = lazy(() => import("rizzui").then((mod) => mod.Select));
// const QuillEditor = dynamic(() => import('@ui/quill-editor'), {
//   ssr: false,
//   loading: () => <QuillLoader className="col-span-full h-[143px]" />,
// });
const QuillEditor = lazy(() => import("@ui/quill-editor"));

export default function ProductSummary({ className }: { className?: string }) {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormGroup
      title="Summary"
      description="Edit your product description and necessary information from here"
      className={cn(className)}
    >
      <Input
        label="Title"
        placeholder="Product title"
        {...register("title")}
        error={errors.title?.message as string}
      />
      <Input
        label="SKU"
        placeholder="Product sku"
        {...register("sku")}
        error={errors.sku?.message as string}
      />

      <Controller
        name="type"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Suspense fallback={<SelectLoader />}>
            <Select
              dropdownClassName="!z-0"
              options={typeOption}
              value={value}
              onChange={onChange}
              label="Product Type"
              error={errors?.type?.message as string}
              // @FIXME: any

              getOptionValue={(option: any) => option.value}
            />
          </Suspense>
        )}
      />

      <Controller
        name="categories"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Suspense fallback={<SelectLoader />}>
            <Select
              options={categoryOption}
              value={value}
              onChange={onChange}
              label="Categories"
              error={errors?.categories?.message as string}
              // @FIXME: any
              getOptionValue={(option: any) => option.value}
              inPortal={false}
            />
          </Suspense>
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field: { onChange, value } }) => (
          <Suspense
            fallback={<QuillLoader className="col-span-full h-[143px]" />}
          >
            <QuillEditor
              value={value}
              onChange={onChange}
              label="Description"
              className="col-span-full [&_.ql-editor]:min-h-[100px]"
              labelClassName="font-medium text-gray-700 dark:text-gray-600 mb-1.5"
            />
          </Suspense>
        )}
      />
    </FormGroup>
  );
}
