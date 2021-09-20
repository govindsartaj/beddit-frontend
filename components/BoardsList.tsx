import Link from "next/link";
import { useGetBoard } from "../api-hooks/boards";

const BoardsList = ({ boards }: any) => {
  const { isLoading, error, board, execute } = useGetBoard();

  return (
    <div>
      {boards.map((board: any, i: number) => (
        <div key={board._id} id={board._id}>
          <Link href={`/${board.name}`}>{board.displayName}</Link>
        </div>
      ))}
    </div>
  );
};

export default BoardsList;
