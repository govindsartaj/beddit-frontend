import BedditButton from "./BedditButton";
import BoardListItem from "./BoardListItem";

const BoardsList = ({ boards }: any) => {
  return (
    <div className="w-full flex-col overflow-hidden">
      <div className="flex flex-row justify-between mx-2">
        <div className="font-light p-3 text-4xl">Boards</div>
        <div className="w-1/4 h-1/2 flex justify-end mt-2">
          <BedditButton text="+" to="/boards/new" />
        </div>
      </div>
      {boards.map((board: any, i: number) => (
        <BoardListItem key={board._id} id={board._id} board={board} />
      ))}
    </div>
  );
};

export default BoardsList;
