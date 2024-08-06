import POSDrawerView from "@/components/point-of-sale/pos-drawer-view";
import { useCart } from "@/store/_deprecated/quick-cart/cart.context";
import FloatingCartButton from "@/components/floating-cart-button";
// import dynamic from "next/dynamic";
import { useState } from "react";
// const Drawer = dynamic(() => import("rizzui").then((module) => module.Drawer), {
//   ssr: false,
// });

type PosDrawerProps = {
  className?: string;
};

export default function POSDrawer({ className }: PosDrawerProps) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { totalItems, items, removeItemFromCart, clearItemFromCart } =
    useCart();

  return (
    <>
      <FloatingCartButton
        onClick={() => setOpenDrawer(true)}
        className={className}
        totalItems={totalItems}
      />

      {/* <Drawer
        isOpen={openDrawer ?? false}
        onClose={() => setOpenDrawer(false)}
        overlayClassName="dark:bg-opacity-40 dark:backdrop-blur-md"
        containerClassName="dark:bg-gray-100"
        className="z-[9999]"
      >
        <POSDrawerView
          removeItemFromCart={removeItemFromCart}
          clearItemFromCart={clearItemFromCart}
          onOrderSuccess={() => setOpenDrawer(false)}
          orderedItems={items}
          className="h-screen border-none"
          simpleBarClassName="h-[calc(100vh_-_350px)] sm:h-[calc(100vh_-_365px)]"
        />
      </Drawer> */}
    </>
  );
}
