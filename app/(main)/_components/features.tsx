import {
  BookOpen,
  CheckCircle,
  Code,
  Laptop,
  ScanEyeIcon,
  Users,
} from "lucide-react";
import FeatureHolder from "./feature-holder";
import { BsEyeglasses } from "react-icons/bs";

const FeatureSection = () => {
  return (
    <div className="h-full flex flex-col space-y-8 mx-20 justify-center items-center py-8">
      <h2 className="text-4xl text-center font-semibold">
        Count on us, to make every bug count.
      </h2>
      <h2 className="text-base text-center text-muted-foreground">
        Skillscape offers comprehensive, no-cost learning resources
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full">
        <FeatureHolder
          Icon={BookOpen}
          title="Learn"
          description="Access a wide range of learning resources, including tutorials, documentation, and more."
        />
        <FeatureHolder
          Icon={Code}
          title="Coding Sandbox"
          description="Practice your coding skills in a real-time, collaborative environment."
        />
        <FeatureHolder
          Icon={Laptop}
          title="Projects"
          description="Work on real-world projects, and contribute to open-source projects."
        />
        <FeatureHolder
          Icon={Users}
          title="Community Support"
          description="Join a community of learners, and get help from peers and community leaders."
        />
        <FeatureHolder
          Icon={CheckCircle}
          title="Quality Content"
          description="Access high-quality, curated content, and resources."
        />
        <FeatureHolder
          Icon={ScanEyeIcon}
          title="Complete transparency"
          description="We believe in transparency, and we are committed to it."
        />
      </div>
    </div>
  );
};

export default FeatureSection;
