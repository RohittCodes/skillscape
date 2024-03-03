import { redirect } from "next/navigation";
import Navbar from "@/components/globals/navbar";
import { createClient } from "@/utils/supabase/server";
import { User } from "@/types/user";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  let userData: User | null = null;

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  userData = user;

  if (!userData) {
    redirect("/auth/sign-in");
  }

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
