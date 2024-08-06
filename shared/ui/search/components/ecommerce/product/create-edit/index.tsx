import ProductIdentifiers from "@/components/ecommerce/product/create-edit/product-identifiers";
import {
  CreateProductInput,
  productFormSchema,
} from "@/validators/create-product.schema";
import PricingInventory from "@/components/ecommerce/product/create-edit/pricing-inventory";
import FormNav, {
  formParts,
} from "@/components/ecommerce/product/create-edit/form-nav";
import ProductVariants from "@/components/ecommerce/product/create-edit/product-variants";
import ProductSummary from "@/components/ecommerce/product/create-edit/product-summary";
import ProductTaxonomies from "@/components/ecommerce/product/create-edit/product-tags";
import DeliveryEvent from "@/components/ecommerce/product/create-edit/delivery-event";
import { defaultValues } from "@/components/ecommerce/product/create-edit/form-utils";
import ProductMedia from "@/components/ecommerce/product/create-edit/product-media";
import ShippingInfo from "@/components/ecommerce/product/create-edit/shipping-info";
import ProductSeo from "@/components/ecommerce/product/create-edit/product-seo";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormFooter from "@components/form-footer";
import { useLayout } from "@/layouts/use-layout";
import { LAYOUT_OPTIONS } from "@/config/enums";
import { Element } from "react-scroll";
import cn from "@utils/class-names";
import toast from "react-hot-toast";
import { useState } from "react";
import { Text } from "rizzui";

const MAP_STEP_TO_COMPONENT = {
  [formParts.summary]: ProductSummary,
  [formParts.media]: ProductMedia,
  [formParts.pricingInventory]: PricingInventory,
  [formParts.productIdentifiers]: ProductIdentifiers,
  [formParts.shipping]: ShippingInfo,
  [formParts.seo]: ProductSeo,
  [formParts.deliveryEvent]: DeliveryEvent,
  [formParts.variantOptions]: ProductVariants,
  [formParts.tagsAndCategory]: ProductTaxonomies,
};

interface IndexProps {
  slug?: string;
  className?: string;
  product?: CreateProductInput;
}

export default function CreateEditProduct({
  slug,
  product,
  className,
}: IndexProps) {
  const { layout } = useLayout();
  const [isLoading, setLoading] = useState(false);
  const methods = useForm<CreateProductInput>({
    resolver: zodResolver(productFormSchema),
    defaultValues: defaultValues(product),
  });

  const onSubmit: SubmitHandler<CreateProductInput> = (data) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("product_data", data);
      toast.success(
        <Text as="b">Product successfully {slug ? "updated" : "created"}</Text>
      );
      methods.reset();
    }, 600);
  };

  return (
    <div className="@container">
      <FormNav
        className={cn(
          layout === LAYOUT_OPTIONS.BERYLLIUM && "z-[999] 2xl:top-[72px]"
        )}
      />
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className={cn(
            "relative z-[19] [&_label.block>span]:font-medium",
            className
          )}
        >
          <div className="mb-10 grid gap-7 divide-y divide-dashed divide-gray-200 @2xl:gap-9 @3xl:gap-11">
            {Object.entries(MAP_STEP_TO_COMPONENT).map(([key, Component]) => (
              <Element
                key={key}
                name={formParts[key as keyof typeof formParts]}
              >
                {<Component className="pt-7 @2xl:pt-9 @3xl:pt-11" />}
              </Element>
            ))}
          </div>

          <FormFooter
            isLoading={isLoading}
            submitBtnText={slug ? "Update Product" : "Create Product"}
          />
        </form>
      </FormProvider>
    </div>
  );
}
