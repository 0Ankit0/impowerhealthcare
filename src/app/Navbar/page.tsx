import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-around mt-4 gap-4">
      <div>
        <Link href={"/"}>
          <Image src="/logo.png" alt="Logo" width={283} height={83} priority />
        </Link>
      </div>
      <div className="flex gap-[4rem] pt-12">
        <Link href={"/"}>HOME</Link>
        <Link href={"AboutUs"}>ABOUT US</Link>
        <Link href={"/Services"}>OUR SERVICES</Link>
        <Link href={"/"}>FAQs</Link>
        <Link href={"/"}>RESOURCES</Link>
        <Link href={"/"}>CONTACT US</Link>
      </div>

      {/* <button className="help">How can we help?</button> */}
    </div>
  );
}
