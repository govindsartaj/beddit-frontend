import BedditPanel from "./BedditPanel";

const CreateBoardForm = () => {
  return (
    <>
      <BedditPanel className="w-full">
        <div className="m-6">
          <label>
            Name your board. You can change this at any time!
            <input
              placeholder="Board Name"
              className="w-full border p-1"
            ></input>
          </label>
        </div>
        <div className="m-6">
          <label>
            Pick a unique board ID for your board&apos;s URL. Choose wisely;
            this cannot be changed later!
            <div className="flex">
              <div className="font-mono hidden sm:block p-1">
                http://beddit.co/
              </div>
              <input
                placeholder="unique-id"
                className="w-full font-mono border p-1"
              ></input>
            </div>
          </label>
        </div>
        <div className="m-6">
          <label>
            Describe your board. What will you be talking about here?
            <input
              placeholder="Description"
              className="w-full border p-1"
            ></input>
          </label>
        </div>
        <div className="flex justify-end">
          <div className="cursor-pointer hover:bg-red-100 w-1/2 sm:w-1/3 md:1/4 lg:w-1/5 text-center font-light mt-3 mx-3 p-2 bg-gray-100 border-black border rounded-lg text-2xl">
            Create
          </div>
        </div>
      </BedditPanel>
    </>
  );
};

export default CreateBoardForm;
