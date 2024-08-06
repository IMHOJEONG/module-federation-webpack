import { User } from "model/user.interface";
import { PropsWithChildren, useEffect, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

type ComponentProps = PropsWithChildren<{
  user: User;
}>;

export default function Component(props: ComponentProps) {
  const { user, children } = props;

  const navigate = useNavigate();

  const location = useLocation();
  const params = useParams();

  const effectUser = useMemo(() => user, [user.id]);
  // useEffect(() => {
  //   console.log("OK!", location, params);
  // }, [location.key]);

  useEffect(() => {
    // const rootPath = "/";
    // const landingPath = "/landing";

    console.log(user);
    // // const data = [rootPath, landingPath].every((path) => )
    // if (location.pathname !== rootPath) {
    // }

    // if (!user.id) {
    //   navigate("/landing", { replace: true });
    // } else {
    //   navigate("/", { replace: true });
    // }
  }, [effectUser]);

  return children;
}
