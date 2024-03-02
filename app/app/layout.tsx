import { redirect } from "next/navigation";
import Navbar from "@/components/globals/navbar";
import { createClient } from "@/utils/supabase/server";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const checkUser = async () => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      redirect("/");
    }
  };

  // Call the checkUser function directly during component rendering
  checkUser();

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
