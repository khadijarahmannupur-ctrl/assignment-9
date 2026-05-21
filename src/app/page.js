import Banner from "@/components/Banner";
import HomepageTutorsCard from "@/components/HomepageTutorsCard";
import LearningStatsSection from "@/components/LearningStatsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import Image from "next/image";

export const metadata = {
  title: "Home | MediQueue",
};

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <HomepageTutorsCard></HomepageTutorsCard>
      <WhyChooseSection></WhyChooseSection>
      <LearningStatsSection></LearningStatsSection>
    </>
  );
}
