import Link from "next/link";

const BedditButton = ({ text, to, onClick }: any) => {
  return (
    <Link href={to} passHref>
      <div
        onClick={onClick}
        className="cursor-pointer hover:bg-red-100 w-full text-center font-light p-2 bg-gray-100 border-black border rounded-lg text-2xl"
      >
        {text}
      </div>
    </Link>
  );
};

export default BedditButton;
