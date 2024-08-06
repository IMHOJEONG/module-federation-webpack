import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "zustand/useUserStore";
// import Grid from "ui/Grid";
// import LandingBackground from "ui/LandingBackground";
// import Button from "ui/Button";

// const MainContainer = React.lazy(() => import("ui/MainContainer"));
// const TextField = React.lazy(() => import("ui/TextField"));

export default function Landing() {
  const { user, handleLogin, handleLogout } = useUserStore();
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleID = useCallback(
    (event: any) => {
      console.log(event.target.value);
      setId(event.target.value);
    },
    [id]
  );

  const handlePassword = useCallback(
    (event: any) => {
      console.log(event.target.value);
      setPassword(event.target.value);
    },
    [password]
  );

  const handleLoginButton = useCallback(
    (id: string, password: string) => {
      handleLogin({
        id,
        password,
        name: "",
        email: "",
        createdAt: "",
        updatedAt: "",
      });
      navigate("/", { replace: true });
    },
    [id, password]
  );

  return (
    <div
      style={{
        margin: "10px",
        background: "transparent",
      }}
    >
      {/* <Grid
        gap="3"
        style={{
          padding: "3rem",
          margin: "100px",
        }}
      >
        <TextField
          onChange={handleID}
          placeholder={"아이디를 입력해주세요"}
          size="3"
        />
        <TextField
          onChange={handlePassword}
          placeholder={"비밀번호를 입력해주세요"}
          size="3"
        />
        <Button onClick={() => handleLoginButton(id, password)}>login</Button>
        <LandingBox />
        <img src={LandingBackgroundImage} className="absolute"></img>
        <LandingBackground />
      </Grid> */}
    </div>
  );
}
