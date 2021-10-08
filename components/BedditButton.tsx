import Link from "next/link";

const BedditButton = ({ text, to = null, onClick, disabled = false }: any) => {
  return to ? (
    <Link href={to} passHref>
      <div
        onClick={!disabled ? onClick : undefined}
        className={`cursor-pointer ${
          !disabled && "hover:bg-red-100"
        } w-full text-center font-light p-2 ${
          disabled ? "bg-gray-500" : "bg-gray-100"
        } border-black border rounded-lg text-2xl`}
      >
        {text}
      </div>
    </Link>
  ) : (
    <div
      onClick={!disabled ? onClick : undefined}
      className={`cursor-pointer ${
        !disabled && "hover:bg-red-100"
      } w-full text-center font-light p-2 ${
        disabled ? "bg-gray-500" : "bg-gray-100"
      } border-black border rounded-lg text-2xl`}
    >
      {text}
    </div>
  );
};

export default BedditButton;
