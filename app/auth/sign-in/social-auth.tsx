"use client";

import { BsGithub, BsGoogle, BsTwitterX } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { Provider } from "@supabase/supabase-js";

export const SocialAuth = () => {
  const socialOAuth = async (provider: Provider) => {
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/auth/sign-in?message=Could not authenticate user");
    }
  };

  const handleGithubSignIn = () => {
    socialOAuth("github");
  };

  const handleGoogleSignIn = () => {
    socialOAuth("google");
  };

  const handleTwitterSignIn = () => {
    socialOAuth("twitter");
  };

  return (
    <div className="mt-4 flex flex-col w-full gap-y-2">
      <div>Use our social auths</div>
      <div className="flex gap-x-2 items-center w-full">
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={handleGithubSignIn}
        >
          <BsGithub size={24} />
        </Button>
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={handleGoogleSignIn}
        >
          <BsGoogle size={24} />
        </Button>
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={handleTwitterSignIn}
        >
          <BsTwitterX size={24} />
        </Button>
      </div>
    </div>
  );
};
