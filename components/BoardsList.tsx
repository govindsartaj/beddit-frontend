import Link from "next/link";

const BoardsList = ({ boards }: any) => {
  return (
    <div>
      {boards.map((board: any, i: number) => (
        <div key={i}>
          <Link href={`/boards/${board.name}`}>{board.displayName}</Link>
        </div>
      ))}
    </div>
  );
};

export default BoardsList;
