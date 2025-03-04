import {
  variantOption,
  productVariants,
} from "@/components/ecommerce/product/create-edit/form-utils";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import SelectLoader from "@components/loader/select-loader";
import { Input, Button, ActionIcon } from "rizzui";
import FormGroup from "@/components/form-group";
import TrashIcon from "@components/icons/trash";

import PiPlusBold from "react-icons/pi/PiPlusBold";

import cn from "@utils/class-names";
import { useCallback } from "react";
// import dynamic from "next/dynamic";
// const Select = dynamic(() => import("rizzui").then((mod) => mod.Select), {
//   ssr: false,
//   loading: () => <SelectLoader />,
// });

export default function ProductVariants({ className }: { className?: string }) {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "productVariants",
  });

  const addVariant = useCallback(() => append([...productVariants]), [append]);

  console.log("fields", fields);

  return (
    <FormGroup
      title="Variant Options"
      description="Add your product variants here"
      className={cn(className)}
    >
      {fields.map((item, index) => (
        <div key={item.id} className="col-span-full flex gap-4 xl:gap-7">
          <Controller
            name={`productVariants.${index}.name`}
            control={control}
            render={({ field: { onChange, value } }) => (
              // <Select
              //   dropdownClassName="!z-0"
              //   options={variantOption}
              //   value={value}
              //   onChange={onChange}
              //   label="Variant Name"
              //   className="w-full @2xl:w-auto @2xl:flex-grow"
              //   getOptionValue={(option) => option.value}
              // />
              <></>
            )}
          />
          <Input
            type="number"
            label="Variant Value"
            placeholder="150.00"
            className="flex-grow"
            prefix={"$"}
            {...register(`productVariants.${index}.value`)}
          />
          {fields.length > 1 && (
            <ActionIcon
              onClick={() => remove(index)}
              variant="flat"
              className="mt-7 shrink-0"
            >
              <TrashIcon className="h-4 w-4" />
            </ActionIcon>
          )}
        </div>
      ))}
      <Button
        onClick={addVariant}
        variant="outline"
        className="col-span-full ml-auto w-auto"
      >
        <PiPlusBold className="me-2 h-4 w-4" /> Add Variant
      </Button>
    </FormGroup>
  );
}
