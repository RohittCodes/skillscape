import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const checkUser = async () => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      redirect("/app");
    }
  };

  checkUser();

  return (
    <div className="flex h-full justify-center items-center">{children}</div>
  );
};

export default AuthLayout;
