// import { create } from "zustand";
// import { User } from "@repo/model";

// import { atom, useAtom } from "jotai";

// interface UserState {
//   user: User;
//   handleLogin: (user: User) => void;
//   handleLogout: (user: User) => void;
// }

// export const itemAtom = atom<UserState>({
//   user: {
//     id: "",
//     password: "",
//     name: "",
//     email: "",
//     createdAt: "",
//     updatedAt: "",
//   },
//   handleLogin: (newUserData) =>
//     set((state) => ({
//       user: {
//         id: newUserData.id,
//         password: newUserData.password,
//         name: "",
//         email: "",
//         createdAt: "",
//         updatedAt: "",
//       },
//     })),
//   handleLogout: () =>
//     set((state) => ({
//       user: {
//         id: "",
//         password: "",
//         name: "",
//         email: "",
//         createdAt: "",
//         updatedAt: "",
//       },
//     })),
// }),
// });

// const useItemAtom = () => useAtom(itemAtom);

// const useUserStore = create(
//   persist<UserState>(
//     (set) => ({
//       user: {
//         id: "",
//         password: "",
//         name: "",
//         email: "",
//         createdAt: "",
//         updatedAt: "",
//       },
//       handleLogin: (newUserData) =>
//         set((state) => ({
//           user: {
//             id: newUserData.id,
//             password: newUserData.password,
//             name: "",
//             email: "",
//             createdAt: "",
//             updatedAt: "",
//           },
//         })),
//       handleLogout: () =>
//         set((state) => ({
//           user: {
//             id: "",
//             password: "",
//             name: "",
//             email: "",
//             createdAt: "",
//             updatedAt: "",
//           },
//         })),
//     }),
//     { name: "user-storage" }
//   )
// );

// export default useUserStore;
