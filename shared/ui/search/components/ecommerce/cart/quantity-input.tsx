import { useCart } from "@/store/_deprecated/quick-cart/cart.context";
import PiMinusBold from "react-icons/pi/PiMinusBold";
import PiPlusBold from "react-icons/pi/PiPlusBold";
import { ActionIcon } from "rizzui";
import { CartItem } from "@/types";

export default function QuantityInput({ product }: { product: CartItem }) {
  const { addItemToCart, removeItemFromCart } = useCart();

  return (
    <div className="inline-flex items-center rounded-lg border border-muted px-1.5 hover:border-gray-1000">
      <ActionIcon
        title="Decrement"
        size="sm"
        variant="flat"
        className="h-auto px-1 py-[5px]"
        onClick={() => removeItemFromCart(product.id)}
      >
        <PiMinusBold className="h-4 w-4" />
      </ActionIcon>
      <input
        type="number"
        className="h-full w-12 border-none text-center outline-none focus:ring-0 sm:w-20 dark:bg-gray-50"
        value={product.quantity}
        readOnly
      />
      <ActionIcon
        title="Increment"
        size="sm"
        variant="flat"
        className="h-auto px-1 py-1.5"
        onClick={() => addItemToCart(product, 1)}
      >
        <PiPlusBold className="h-3.5 w-3.5" />
      </ActionIcon>
    </div>
  );
}
