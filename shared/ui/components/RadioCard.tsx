// import {
//   RadioCards,
//   Flex,
//   Box,
//   Text,
//   DataList,
//   Badge,
//   Link,
//   Code,
//   IconButton,
// } from "@radix-ui/themes";
// import { CopyIcon } from "@radix-ui/react-icons";
// import React, { PropsWithChildren } from "react";

// interface ItemProps {
//   postId: number;
//   id: number;
//   name: string;
//   email: string;
//   body: string;
// }

// type ComponentProps = PropsWithChildren<{
//   items: ItemProps[];
// }>;

// export default function Component(props: ComponentProps) {
//   const { items, children } = props;

//   return (
//     <Box>
//       <RadioCards.Root defaultValue="1" columns={{ initial: "1", sm: "3" }}>
//         {items?.map((item, index) => {
//           const { postId, id, name, email, body } = item;
//           return (
//             <RadioCards.Item value={`${index + 1}`} key={item.id}>
//               <DataList.Root>
//                 <DataList.Item align="center">
//                   <DataList.Label minWidth="88px">ID</DataList.Label>
//                   <DataList.Value>
//                     <Badge color="jade" variant="soft" radius="full">
//                       {id}
//                     </Badge>
//                   </DataList.Value>
//                 </DataList.Item>
//                 <DataList.Item>
//                   <DataList.Label minWidth="88px">PostID</DataList.Label>
//                   <DataList.Value>
//                     <Flex align="center" gap="2">
//                       <Code variant="ghost">{postId}</Code>
//                       <IconButton
//                         size="1"
//                         aria-label="Copy value"
//                         color="gray"
//                         variant="ghost"
//                       >
//                         <CopyIcon />
//                       </IconButton>
//                     </Flex>
//                   </DataList.Value>
//                 </DataList.Item>
//                 <DataList.Item>
//                   <DataList.Label minWidth="88px">Name</DataList.Label>
//                   <DataList.Value>{name}</DataList.Value>
//                 </DataList.Item>
//                 <DataList.Item>
//                   <DataList.Label minWidth="88px">Email</DataList.Label>
//                   <DataList.Value>
//                     <Link href={`mailto:${email}`}>{email}</Link>
//                   </DataList.Value>
//                 </DataList.Item>
//                 <DataList.Item>
//                   <DataList.Label minWidth="88px">Body</DataList.Label>
//                   <DataList.Value>{body}</DataList.Value>
//                 </DataList.Item>
//               </DataList.Root>
//               ;
//             </RadioCards.Item>
//           );
//         })}
//       </RadioCards.Root>
//     </Box>
//   );
// }
