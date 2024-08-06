// import React, { Suspense } from "react";
// import JotaiStore from "jotai/useItemStore";
// import zustandStore from "zustand/useItemStore";
// import Flex from "ui/Flex";

// const Theme = React.lazy(() => import("ui/Theme"));
// const MainContainer = React.lazy(() => import("ui/MainContainer"));
// const Card = React.lazy(() => import("ui/Card"));
// const Button = React.lazy(() => import("ui/Button"));

// const StoreTest = () => {
//   const [data, setItem] = JotaiStore();
//   const zustandData = zustandStore((state: any) => state);

//   return (
//     <Suspense fallback={"loading..."}>
//       <Theme>
//         <MainContainer>
//           <Suspense fallback={"loading..."}>
//             <Card>{`zustandData :  ${zustandData.items}`}</Card>
//             <Flex gap="2">
//               <Button
//                 onClick={() =>
//                   zustandData.increaseItems({ items: data.items + 1 })
//                 }
//               >
//                 increase
//               </Button>
//               <Button
//                 onClick={() =>
//                   zustandData.decreaseItems({ items: data.items + 1 })
//                 }
//               >
//                 decrease
//               </Button>
//             </Flex>
//             <Card> {`Jotai :  ${data.items}`}</Card>

//             <Flex gap="2">
//               <Button onClick={() => setItem({ items: data.items + 1 })}>
//                 increase
//               </Button>
//               <Button onClick={() => setItem({ items: data.items - 1 })}>
//                 decrease
//               </Button>
//             </Flex>
//           </Suspense>
//         </MainContainer>
//       </Theme>
//     </Suspense>
//   );
// };

// export default StoreTest;
