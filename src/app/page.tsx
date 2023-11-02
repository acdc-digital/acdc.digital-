import FileUpload from "@/components/FileUpload";
import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar"; 
import HomeHero from '@/components/home-hero';
import CallToAction from '@/components/CallToAction';
import Accordion from '@/components/accordian';
import FiveStepProcess from "@/components/FiveStepProcess";
import FeatureHighlight from "@/components/FeatureHighlight";
// import HowItWorks from "@/components/HowItWorks";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#E9E9E5', margin: 0, padding: 0 }}>
      <Navbar />
      <div style={{ width: '100%', margin: 0, padding: 0 }}>
        <HomeHero />
        <div style={{ backgroundColor: '#E9E9E5', margin: 0, padding: 0 }}>
          <CallToAction />
          <Accordion />
          <FiveStepProcess /> 
          <FeatureHighlight /> 
          { /* <HowItWorks /> */ }  
          <AboutUs /> 
          <Footer /> 
        </div>
      </div>
    </div>
  );
}

