import { PropsWithChildren } from "react";
import Layout from "../layouts/layout";
import GlobalDrawer from "../components/drawer-views/container";
import GlobalModal from "../components/modal-views/container";

function SearchLayout(props: PropsWithChildren<any>) {
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
