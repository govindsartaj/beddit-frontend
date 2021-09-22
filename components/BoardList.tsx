import BoardListItem from "./BoardListItem";
import Link from "next/link";

const BoardsList = ({ boards }: any) => {
  return (
    <div className="w-full flex-col overflow-hidden">
      <div className="flex flex-row justify-between">
        <div className="font-light p-3 text-4xl">Boards</div>
        <Link href="/boards/new" passHref>
          <div className="cursor-pointer hover:bg-red-100 font-light mt-3 mx-3 p-2 bg-gray-100 border-black border rounded-lg text-2xl">
            + create
          </div>
        </Link>
      </div>
      {boards.map((board: any, i: number) => (
        <BoardListItem key={board._id} id={board._id} board={board} />
      ))}
      {boards.map((board: any, i: number) => (
        <BoardListItem key={board._id} id={board._id} board={board} />
      ))}
      {boards.map((board: any, i: number) => (
        <BoardListItem key={board._id} id={board._id} board={board} />
      ))}
      {boards.map((board: any, i: number) => (
        <BoardListItem key={board._id} id={board._id} board={board} />
      ))}
      {boards.map((board: any, i: number) => (
        <BoardListItem key={board._id} id={board._id} board={board} />
      ))}
      {boards.map((board: any, i: number) => (
        <BoardListItem key={board._id} id={board._id} board={board} />
      ))}
      {boards.map((board: any, i: number) => (
        <BoardListItem key={board._id} id={board._id} board={board} />
      ))}
      {boards.map((board: any, i: number) => (
        <BoardListItem key={board._id} id={board._id} board={board} />
      ))}
      {boards.map((board: any, i: number) => (
        <BoardListItem key={board._id} id={board._id} board={board} />
      ))}
      {boards.map((board: any, i: number) => (
        <BoardListItem key={board._id} id={board._id} board={board} />
      ))}
    </div>
  );
};

export default BoardsList;
