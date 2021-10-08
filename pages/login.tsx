import Link from "next/link";
import type { NextPage } from "next";
import PageTitle from "../components/PageTitle";
import BedditPanel from "../components/BedditPanel";
import FormField from "../components/FormField";
import BedditButton from "../components/BedditButton";
import { useState } from "react";
import { useLogin } from "../api-hooks/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Cookies from "universal-cookie";

const NewBoard: NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading, error, user, execute } = useLogin();

  const router = useRouter();

  const successNotify = () =>
    toast("Login Successful!", {
      type: "success",
      hideProgressBar: true,
      position: "bottom-right",
    });
  const failureNotify = () =>
    toast("Check credentials and try again!", {
      type: "error",
      hideProgressBar: true,
      position: "bottom-right",
    });

  const handleLogin = async () => {
    try {
      if (
        username.length < 1 ||
        username.length > 64 ||
        password.length < 1 ||
        password.length > 64
      ) {
        return;
      }

      const user = username;
      const pass = password;
      setUsername("");
      setPassword("");
      const loginResponse = await execute(user, pass);

      window.localStorage.setItem("bedditData", JSON.stringify(loginResponse));
    

      successNotify();
      router.push("/");
    } catch (e: any) {
      if (e.message === "Unauthorized") failureNotify();
    }
  };

  return (
    <div>
      <div className="text-center">
        <PageTitle text={"Login"} />
      </div>
      <BedditPanel className="max-w-56">
        <FormField
          label="Username"
          value={username}
          setValue={setUsername}
          onEnter={handleLogin}
        />
        <FormField
          label="Password"
          password={true}
          value={password}
          setValue={setPassword}
          onEnter={handleLogin}
        />
        <div className="flex justify-center my-4">
          <BedditButton
            text="Login"
            onClick={handleLogin}
            disabled={isLoading}
          />
        </div>
        <div>
          Don&apos;t have an account?{" "}
          <Link href="/signup" passHref>
            <span className="underline cursor-pointer">Sign up!</span>
          </Link>
        </div>
        <div className="underline">Forgot your password?</div>
      </BedditPanel>
    </div>
  );
};

export default NewBoard;
