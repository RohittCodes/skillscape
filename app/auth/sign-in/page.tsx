import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SocialAuth } from "./social-auth";
import { z } from "zod";
import { cn } from "@/lib/utils";

const emailSchema = z
  .string()
  .email({ message: "Invalid email format" })
  .min(6, { message: "Email must be at least 6 characters long" })
  .max(255, { message: "Email must be at most 255 characters long" });

const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .max(50, { message: "Password must be at most 50 characters long" })
  .regex(/[a-zA-Z]/, { message: "Password must contain at least one letter" })
  .regex(/[0-9]/, { message: "Password must contain at least one digit" })
  .regex(/[!@#$%^&*(),.?":{}|<>]/, {
    message: "Password must contain at least one special character",
  });

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    let errorMsg = "";

    try {
      await emailSchema.parseAsync(email);
      await passwordSchema.parseAsync(password);
    } catch (error: any) {
      errorMsg = error.issues.map((issue: any) => issue.message).join(",");
      return redirect(`/auth/sign-in?message=${errorMsg}`);
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log(error);
      return redirect("/auth/sign-in?message=Could not authenticate user");
    }

    return redirect("/app");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    let errorMsg = "";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    try {
      await emailSchema.parseAsync(email);
      await passwordSchema.parseAsync(password);
    } catch (error: any) {
      errorMsg = error.issues.map((issue: any) => issue.message).join(",");
      return redirect(`/auth/sign-in?message=${errorMsg}`);
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/auth/sign-in?message=Could not authenticate user");
    }

    return redirect(
      "/auth/sign-in?message=Check email to continue sign in process"
    );
  };

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <form className="animate-in flex-1 flex flex-col w-full justify-center text-foreground">
        <Tabs defaultValue="sign-in" className="w-full h-full">
          <TabsList className="w-full flex">
            <TabsTrigger value="sign-in" className="w-1/2">
              Sign In
            </TabsTrigger>
            <TabsTrigger value="sign-up" className="w-1/2">
              Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in" className="flex flex-col w-full">
            <label className="text-md" htmlFor="email">
              Email
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              name="email"
              placeholder="you@example.com"
              required
            />
            <label className="text-md" htmlFor="password">
              Password
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
            <SubmitButton
              formAction={signIn}
              className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
              pendingText="Signing In..."
            >
              Sign In
            </SubmitButton>
            {searchParams?.message && (
              <p
                className={cn(
                  searchParams.message !==
                    "Check email to continue sign in process"
                    ? "mt-4 p-4 bg-foreground/10 text-rose-500 text-center"
                    : "mt-4 p-4 bg-foreground/10 text-green-500 text-center"
                )}
              >
                {searchParams.message.split(",").join("\n")}
              </p>
            )}
          </TabsContent>
          <TabsContent value="sign-up" className="flex flex-col w-full mt-0">
            <label className="text-md" htmlFor="email">
              Email
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              name="email"
              placeholder="you@example.com"
              required
            />
            <label className="text-md" htmlFor="password">
              Password
            </label>
            <input
              className="rounded-md px-4 py-2 bg-inherit border mb-6"
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
            <SubmitButton
              formAction={signUp}
              className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2"
              pendingText="Signing Up..."
            >
              Sign Up
            </SubmitButton>
            {searchParams?.message && (
              <p
                className={cn(
                  searchParams.message !==
                    "Check email to continue sign in process"
                    ? "mt-4 p-4 bg-foreground/10 text-rose-500 text-center"
                    : "mt-4 p-4 bg-foreground/10 text-green-500 text-center"
                )}
              >
                {" "}
                {searchParams.message.split(",").join("\n")}
              </p>
            )}
          </TabsContent>
        </Tabs>
      </form>
      <SocialAuth />
    </div>
  );
}
