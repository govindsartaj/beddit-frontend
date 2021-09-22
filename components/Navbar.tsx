import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-red-100 p-2 h-14">
      <Link href={"/"} passHref>
        <div className="text-4xl cursor-pointer font-black">
          🅱️<span className="hidden sm:inline">EDDIT</span>
        </div>
      </Link>
      <div className="flex justify-between float-right w-3/4 sm:w-2/5">
        <input
          maxLength={128}
          placeholder="search for boards/posts"
          className="rounded-md px-4 w-full h-full"
        ></input>
        <Link href="/login" passHref>
          <div className="p-2 mx-2 hover:shadow-md cursor-pointer">Login</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
