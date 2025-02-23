import dynamic from "next/dynamic";

import Hero from "./sections/Hero";
import ContactFixedBanner from "./sections/ContactFixedBanner";

const Flow = dynamic(() => import("./sections/Flow"));
const WhyChoose = dynamic(() => import("./sections/WhyChoose"));
const VideoSection = dynamic(() => import("./sections/VideoSection"));
const BlogsPost = dynamic(() => import("./sections/BlogsPost"));
const ContactBanner = dynamic(() => import("./sections/ContactBanner"));
const PurchasedItems = dynamic(() => import("./sections/PurchasedItems"));
const PurchaseResults = dynamic(() => import("./sections/PurchaseResults"));
const PurchaseProcess = dynamic(() => import("./sections/PurchaseProcess"));
const BusinessPolicy = dynamic(() => import("./sections/BusinessPolicy"));
const ReviewsReceived = dynamic(() => import("./sections/ReviewsReceived"));
const FrequentlyAskedQuestions = dynamic(() => import("./sections/FrequentlyAskedQuestions"));
const CompanyProfile = dynamic(() => import("./sections/CompanyProfile"));
const Inquiry = dynamic(() => import("@/components/common/sections/Inquiry"));

const Index = () => {
  return (
    <>
      <Hero />
      <ContactFixedBanner />
      <Flow />
      <WhyChoose />
      <VideoSection />
      <ContactBanner />
      <PurchasedItems />
      <PurchaseResults />
      <PurchaseProcess />
      <BusinessPolicy />
      <ContactBanner />
      <ReviewsReceived />
      <BlogsPost />
      <FrequentlyAskedQuestions />
      <ContactBanner />
      <CompanyProfile />
      <Inquiry />
    </>
  );
};

export default Index;
