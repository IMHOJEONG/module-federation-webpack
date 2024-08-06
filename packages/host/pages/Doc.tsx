// import React, { Suspense } from "react";
// import JotaiStore from "jotai/useItemStore";
// import zustandStore from "zustand/useItemStore";
// import Spinner from "ui/Spinner";
// const CommentData = React.lazy(() => import("reactQuery/CommentData"));

// const Theme = React.lazy(() => import("ui/Theme"));

// const Doc = () => {
//   const [data, setItem] = JotaiStore();
//   const zustandData = zustandStore((state: any) => state);

//   return (
//     <Suspense fallback={<Spinner />}>
//       <Theme>
//         <CommentData />
//       </Theme>
//     </Suspense>
//   );
// };

// export default Doc;
