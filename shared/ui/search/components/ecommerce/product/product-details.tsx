import ProductDetailsRelatedProducts from "@/components/ecommerce/product/product-details-related-products";
import ProductDetailsDescription from "@/components/ecommerce/product/product-details-description";
import ProductDeliveryOptions from "@/components/ecommerce/product/product-delivery-options";
import ProductDetailsGallery from "@/components/ecommerce/product/product-details-gallery";
import ProductDetailsSummery from "@/components/ecommerce/product/product-details-summery";
import ProductDetailsReview from "@/components/ecommerce/product/product-details-review";
import { modernProductsGrid } from "@/data/shop-products";
import { generateSlug } from "@utils/generate-slug";
import { useParams } from "react-router-dom";
// import { useParams } from "next/navigation";

const defaultProduct = {
  id: 1,
  thumbnail: `https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/1.webp`,
  title: "Casio Watch",
  description: "Casio Classic Watch",
  price: 295.0,
  sale_price: 320.0,
  colors: [
    { name: "Breaker Bay", code: "#6AA39C" },
    { name: "Malibu", code: "#6BDCFF" },
    { name: "Purple Heart", code: "#5D30DD" },
    { name: "Alizarin Crimson", code: "#D72222" },
    { name: "Viola", code: "#C886A9" },
  ],
  sizes: [6, 7, 8, 9, 10, 11],
};

export default function ProductDetails() {
  const params = useParams();
  const product =
    modernProductsGrid.find(
      (item) => generateSlug(item.title) === params.slug
    ) ?? defaultProduct;

  return (
    <div className="@container">
      <div className="@3xl:grid @3xl:grid-cols-12">
        <div className="col-span-7 mb-7 @container @lg:mb-10 @3xl:pe-10">
          <ProductDetailsGallery />
        </div>
        <div className="col-span-5 @container">
          <ProductDetailsSummery product={product} />
          <ProductDeliveryOptions />
          <ProductDetailsDescription />
          <ProductDetailsReview />
        </div>
      </div>
      <ProductDetailsRelatedProducts />
    </div>
  );
}
