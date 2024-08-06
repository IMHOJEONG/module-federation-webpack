import { PropsWithChildren } from "react";
import Layout from "../layouts/layout";
import GlobalDrawer from "../components/drawer-views/container";
import GlobalModal from "../components/modal-views/container";

export default function Page(props: PropsWithChildren<{}>) {
  const { children } = props;

  return (
    <div className="dark">
      <Layout>
        {children}
        <GlobalDrawer />
        <GlobalModal />
      </Layout>
    </div>
  );
}
