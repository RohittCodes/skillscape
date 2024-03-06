"use client";

import FeatureSection from "./_components/features";
import FooterSection from "./_components/footer";
import IntroSection from "./_components/intro";

export default function Home() {
  return (
    <div className="flex flex-col space-y-4">
      <IntroSection />
      <FeatureSection />
      <FooterSection />
    </div>
  );
}
