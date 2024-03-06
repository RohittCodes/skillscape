import Link from "next/link";
import AuthButton from "./auth-button";
import Image from "next/image";
import { Tabs } from "../ui/tabs";
import { ThemeToggle } from "./theme-toggle";
import SearchBar from "./search-bar";

const Navbar = () => {
  return (
    <div className="text-primary py-[8px] h-auto bg-background border-[1px] border-border">
      <div className="mx-[16px] px-4 py-2 flex justify-between transition-colors items-center rounded-md">
        <div className="flex items-center space-x-16">
          <Link
            href="/"
            className="flex cursor-pointer space-x-[6px] items-center"
          >
            <h1 className="text-xl font-medium">✨SKILLSCAPE</h1>
            {/* <div className="h-[22px] w-[2px] bg-rose-500 flex items-center justify-center rotate-[25deg]" />
            <h1 className="text-xl font-semibold cursor-pointer">SKILLSCAPE</h1> */}
            {/* <Image
            src="/skillscape.svg"
            alt="SkillScape Logo"
            width={164}
            height={40}
            className="cursor-pointer"
          /> */}
          </Link>
          <Tabs className="flex space-x-8 font-medium">
            <Link href="/app/learn">Learn</Link>
            <Link href="/app/projects">Projects</Link>
            <Link href="/blogs">Blogs</Link>
          </Tabs>
        </div>
        <SearchBar />
        <div className="flex items-center">
          <div className="flex items-center space-x-6 font-medium">
            <Link href="/about">About</Link>
            <AuthButton />
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-[2px] bg-primary-foreground h-[28px]" />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
