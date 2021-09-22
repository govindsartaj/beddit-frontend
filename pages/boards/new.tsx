import type { NextPage } from "next";
import CreateBoardForm from "../../components/CreateBoardForm";
import PageTitle from "../../components/PageTitle";

const NewBoard: NextPage = () => {
  return (
    <div>
      <PageTitle text={"Create Board"} />
      <CreateBoardForm />
    </div>
  );
};

export default NewBoard;
