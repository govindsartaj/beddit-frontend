import Link from "next/link";

const Footer = () => {
  return (
    <div className="text-center bg-red-100 p-2 h-auto">
      <Link href={"/"} passHref>
        <div className="text-4xl m-4 cursor-pointer font-black">
          🅱️<span className="hidden sm:inline">EDDIT</span>
        </div>
      </Link>
      <div>
        <Link href="/">Careers</Link>
      </div>
      <div>
        <Link href="/">Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Footer;
