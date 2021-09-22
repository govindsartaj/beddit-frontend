import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-red-100 font-black p-2 h-14">
      <Link href={"/"} passHref>
        <div className="text-4xl cursor-pointer">
          🅱️<span className="hidden sm:inline">EDDIT</span>
        </div>
      </Link>
      <input
        maxLength={128}
        placeholder="search for boards/posts"
        className="float-right px-4 mx-2 w-3/4 sm:w-2/5 rounded-md"
      ></input>
    </div>
  );
};

export default Navbar;
