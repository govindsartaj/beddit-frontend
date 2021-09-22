import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useGetAllBoards } from "../api-hooks/boards";
import BoardList from "../components/BoardList";

const Home: NextPage = () => {
  const { isLoading, error, boards, execute } = useGetAllBoards();

  useEffect(() => {
    execute();
  }, [execute]);

  if (isLoading) return null;

  if (error) return <div>something went wrong...</div>;

  return <div className="w-full">{boards && <BoardList boards={boards} />}</div>;
};

export default Home;
