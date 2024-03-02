import Link from "next/link";
import { useRouter } from "next/navigation";
import AuthButton from "./auth-button";

const Navbar = () => {
  return (
    <div className="text-primary py-[12px] bg-background shadow-sm shadow-primary-foreground">
      <div className="container mx-auto px-0 flex justify-between items-center">
        <h1 className="text-2xl font-bold">SkillScape</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-2">
          <AuthButton />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
