import { useEffect } from "react";
import instance from "axios/instance";

export default function PostData() {
  useEffect(() => {
    async function test() {
      const data2 = await instance.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(data2);
    }

    test();
  }, []);

  return (
    <div>
      <h1>Post Data</h1>
      <p>This is a page that will be used to post data.</p>
    </div>
  );
}
