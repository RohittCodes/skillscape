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
    <div className="flex flex-col gap-4">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
