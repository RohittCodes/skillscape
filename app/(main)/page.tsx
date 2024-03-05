"use client";

import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigate = (route: string) => {
    router.push(route);
  };

  return (
    <div className="h-full flex flex-col space-y-8 mx-4 justify-center items-center py-8">
      <h2 className="text-lg text-center text-muted-foreground">
        Skillscape is intended to serve as a platform for accessing
        <br />
        free tech related resources.
      </h2>
      <h2 className=" text-5xl text-center font-semibold">
        Elevate your tech skills
        <br />
        through Hands-On learning
      </h2>
      <div className="flex space-x-12">
        <Button
          size="lg"
          className="h-12 flex items-center justify-between gap-2 text-lg font-normal"
          onClick={() => handleNavigate("/auth/sign-in")}
        >
          Register for free
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="h-12 flex items-center justify-between gap-2 text-lg font-normal"
          onClick={() => handleNavigate("/blogs")}
        >
          <Book className="" size="20" />
          Read our blogs
        </Button>
      </div>
      <div>
        <h2 className="text-lg text-center text-muted-foreground">
          Disclaimer: Skillscape was never meant to be an EdTech platform.
          <br />
          Don&apos;t expect anything extravagent from the creator(s).
        </h2>
      </div>
    </div>
  );
}
