import Link from "next/link";
import type { NextPage } from "next";
import PageTitle from "../components/PageTitle";
import BedditPanel from "../components/BedditPanel";
import FormField from "../components/FormField";
import BedditButton from "../components/BedditButton";
import { useState } from "react";

const NewBoard: NextPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div className="text-center">
        <PageTitle text={"Sign up"} />
      </div>
      <BedditPanel className="max-w-56 ">
        <FormField label="Username*" value={username} setValue={setUsername} />
        <FormField label="Email address*" value={email} setValue={setEmail} />
        <FormField
          label="Password*"
          password={true}
          value={password}
          setValue={setPassword}
        />
        <div className="flex justify-center my-4">
          <BedditButton
            text="Create account"
            to="#"
            onClick={() => console.log(username, email, password)}
          />
        </div>
        <div>
          Already have an account? <Link href="/login" passHref><span className="underline cursor-pointer">Log in!</span></Link>
        </div>
      </BedditPanel>
    </div>
  );
};

export default NewBoard;
