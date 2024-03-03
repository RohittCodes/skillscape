import { redirect } from "next/navigation";
import Navbar from "@/components/globals/navbar";
import { createClient } from "@/utils/supabase/server";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  let userData = null;
  const checkUser = async () => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    userData = user;
    console.log(user);
  };

  if (!userData) {
    redirect("/auth/sign-in");
  }

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
