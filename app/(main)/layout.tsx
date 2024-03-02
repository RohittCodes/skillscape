import Navbar from "@/components/globals/navbar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/app");
  }
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
