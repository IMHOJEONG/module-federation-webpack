// import { Table } from "@radix-ui/themes";
// import React, { PropsWithChildren, ReactNode } from "react";

// type ComponentProps = PropsWithChildren<{
//   headers: string[];
//   datas: { header: string; data: (string | ReactNode)[] }[];
// }>;

// export default function Component(props: ComponentProps) {
//   const { headers, datas, children } = props;

//   return (
//     <Table.Root>
//       <Table.Header>
//         <Table.Row>
//           {headers.map((header) => {
//             return (
//               <Table.ColumnHeaderCell key={header}>
//                 {header}
//               </Table.ColumnHeaderCell>
//             );
//           })}
//         </Table.Row>
//       </Table.Header>

//       <Table.Body>
//         {datas.map((rowData) => {
//           const { header, data } = rowData;
//           return (
//             <Table.Row key={header}>
//               <Table.RowHeaderCell>{header}</Table.RowHeaderCell>
//               <>
//                 {data.map((rowData) => {
//                   return (
//                     <Table.Cell key={rowData?.toString()}>{rowData}</Table.Cell>
//                   );
//                 })}
//               </>
//             </Table.Row>
//           );
//         })}
//       </Table.Body>
//     </Table.Root>
//   );
// }
