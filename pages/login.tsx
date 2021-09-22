import type { NextPage } from "next";
import PageTitle from "../components/PageTitle";
import BedditPanel from "../components/BedditPanel";

const NewBoard: NextPage = () => {
  return (
    <div>
      <PageTitle text={"Login"} />
      <BedditPanel className="w-1/2">Login Form</BedditPanel>
    </div>
  );
};

export default NewBoard;
