import Link from "next/link";
import type { NextPage } from "next";
import PageTitle from "../components/PageTitle";
import BedditPanel from "../components/BedditPanel";
import FormField from "../components/FormField";
import BedditButton from "../components/BedditButton";
import { useState } from "react";

const NewBoard: NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="text-center">
        <PageTitle text={"Login"} />
      </div>
      <BedditPanel className="max-w-56">
        <FormField label="Username" value={username} setValue={setUsername} />
        <FormField
          label="Password"
          password={true}
          value={password}
          setValue={setPassword}
        />
        <div className="flex justify-center my-4">
          <BedditButton
            text="Login"
            to="#"
            onClick={() => console.log(username, password)}
          />
        </div>
        <div>
          Don&apos;t have an account? <Link href="/signup" passHref><span className="underline cursor-pointer">Sign up!</span></Link>
        </div>
        <div className="underline">Forgot your password?</div>
      </BedditPanel>
    </div>
  );
};

export default NewBoard;
