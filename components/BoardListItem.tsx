import Link from "next/link";

const BoardListItem = ({ board }: any) => {
  return (
    <Link href={`/${board.name}`} passHref>
      <div className="border-1 border-gray-100 h-auto cursor-pointer m-2 p-4 bg-gray-50 rounded-lg shadow-md">
        <div className="font-light text-3xl">{board.displayName}</div>
        <div className="font-light text-xl">{board.description}</div>
      </div>
    </Link>
  );
};

export default BoardListItem;
