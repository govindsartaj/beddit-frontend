import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useGetBoards } from "../api-hooks/boards/getBoards";
import BoardsList from "../components/BoardsList";

const Home: NextPage = () => {
  const { isLoading, error, boards, execute } = useGetBoards();

  useEffect(() => {
    execute();
  }, [execute]);

  if (isLoading) return <div>loading...</div>;

  if (error) return <div>something went wrong...</div>;

  return <div>{boards && <BoardsList boards={boards} />}</div>;
};

export default Home;
