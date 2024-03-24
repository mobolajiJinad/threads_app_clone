import Link from "next/link";
import Image from "next/image";

const Topbar = () => {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-[#121417] px-6 py-3">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/logo.svg" alt="logo" width={28} height={28} />
        <p className="max-xs:hidden font-bold text-white">Threads</p>
      </Link>

      <div className="block md:hidden">
        <div className="flex cursor-pointer">
          <Image src="/assets/logout.svg" alt="logout" width={24} height={24} />
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
