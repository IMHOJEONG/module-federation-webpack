import { lazy } from "react";
import {
  QueryClientProvider,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

// const RadioCard = lazy(() => import("ui/RadioCard"));

export const fetchComments = async () => {
  const response = await (
    await fetch("https://jsonplaceholder.typicode.com/comments")
  ).json();
  return response;
};

export default function Component() {
  const queryClient = useQueryClient();

  // Queries
  const { data } = useQuery({ queryKey: ["comments"], queryFn: fetchComments });

  return <div>{/* <RadioCard items={data} /> */}</div>;
}

// react-query layer 분리

// suspense를 감싸는 부분을 함수로 분리해서 적용하기
