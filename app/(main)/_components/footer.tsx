import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";
import { BsGithub, BsInstagram, BsTwitterX } from "react-icons/bs";

const FooterSection = () => {
  return (
    <div className="h-full flex flex-col space-y-8 mx-20 justify-center items-center py-8">
      <div className="flex justify-between w-full items-center">
        <h2 className="text-xl text-primary font-semibold">
          You can access some resources 🚀
          <br />
          without being signed in for the platform too.
        </h2>
        <Button variant="default" size="lg" className="rounded-full">
          Read our blogs
        </Button>
      </div>
      <div className="w-full h-[1px] bg-border rounded-full" />
      <div className="flex w-full justify-between items-start space-x-48">
        <div className="flex flex-col flex-1 justify-start items-start gap-4">
          <h3 className="text-base font-semibold">About Skillscape</h3>
          <p className="text-sm text-primary text-opacity-10 text-wrap">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex justify-start items-center gap-4">
            <BsTwitterX size="16" />
            <BsGithub size="16" />
            <BsInstagram size="16" />
          </div>
        </div>
        <div className="flex justify-between items-start gap-20">
          <div className="flex flex-col justify-start items-start gap-4">
            <h3 className="text-base font-semibold">Quick Links</h3>
            <p className="text-sm text-primary text-opacity-10">Projects</p>
            <p className="text-sm text-primary text-opacity-10">Sandbox</p>
            <p className="text-sm text-primary text-opacity-10">Learn</p>
            <p className="text-sm text-primary text-opacity-10">Contribute</p>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <h3 className="text-base font-semibold">Help</h3>
            <p className="text-sm text-primary text-opacity-10">
              Customer Support
            </p>
            <p className="text-sm text-primary text-opacity-10">
              Terms and conditions
            </p>
            <p className="text-sm text-primary text-opacity-10">
              Privacy Policies
            </p>
            <p className="text-sm text-primary text-opacity-10">Contact</p>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <h3 className="text-base font-semibold">Resources</h3>
            <p className="text-sm text-primary text-opacity-10">Free E-books</p>
            <p className="text-sm text-primary text-opacity-10">Tutorials</p>
            <p className="text-sm text-primary text-opacity-10">Blogs</p>
            <p className="text-sm text-primary text-opacity-10">
              Youtube playlist
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] rounded-full" />
      <div className="flex w-full justify-center items-center">
        <p className="text-sm text-primary text-opacity-10">
          © 2024 Skillscape. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
