// import store from "jotai/useItemStore";
// import React, { Suspense } from "react";
// import Blockquote from "ui/Blockquote";
// import Flex from "ui/Flex";
// import Grid from "ui/Grid";
// import MainArchitecture from "ui/MainArchitecture";
// import Spinner from "ui/Spinner";
// import Text from "ui/Text";
// import store2 from "zustand/useItemStore";

// const MainContainer = React.lazy(() => import("ui/MainContainer"));

// export default function Component() {
//   const [data, setItem] = store();
//   const zustandData = store2((state: any) => state);
//   return (
//     <Suspense fallback={<Spinner />}>
//       <MainContainer
//         style={{
//           height: "90vh",
//         }}
//       >
//         <Grid gap="3" align={"center"} justify={"center"} columns="2">
//           <Flex
//             gap="3"
//             direction="column"
//             style={{
//               fontSize: "1.5rem",
//             }}
//           >
//             <Text>Module Federation?</Text>
//             <Blockquote>
//               JavaScript 애플리케이션의 여러 부분을 독립적으로 다루기 위한
//               아키텍처 패턴입니다.
//             </Blockquote>
//           </Flex>
//           <Flex>
//             <MainArchitecture />
//           </Flex>
//           {/* <Suspense fallback={<Spinner />}>
//             <Card />
//           </Suspense>
//           <Suspense fallback={<Spinner />}>
//             <TextField />
//           </Suspense>
//           <Suspense fallback={<Spinner />}>
//             <Inset />
//           </Suspense>
//           <Suspense fallback={<Spinner />}>
//             <Table
//               headers={["Packages", "State", "increase"]}
//               datas={[
//                 {
//                   header: "zustand",
//                   data: [
//                     zustandData.items,
//                     <button
//                       onClick={() =>
//                         zustandData.increaseItems({ items: data.items + 1 })
//                       }
//                     >
//                       click
//                     </button>,
//                   ],
//                 },
//                 {
//                   header: "Jotai",
//                   data: [
//                     data.items,
//                     <button
//                       onClick={() => {
//                         setItem({ items: data.items + 1 });
//                       }}
//                     >
//                       click
//                     </button>,
//                   ],
//                 },
//               ]}
//             />
//           </Suspense>
//           <Suspense fallback={"loading..."}>
//             <CheckBoxCard />
//           </Suspense> */}
//         </Grid>
//       </MainContainer>
//     </Suspense>
//   );
// }
