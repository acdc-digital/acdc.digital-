'use client'
import React, { useState } from 'react';
import Image from 'next/image';

interface AccordionItemProps {
  title: string;
  subtitle: string | JSX.Element;
  content: string;
  isFirst?: boolean;
  isLast?: boolean;
}

interface AccordionProps {
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, subtitle, content, isFirst, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-black w-4/5 ${isFirst ? 'rounded-t-lg' : ''}`}>
      <button
        className="w-full text-left p-4 bg-white text-black"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={title}
      >
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-bold" style={{ color: "#3E28DE", fontWeight: 'bold' }}>{title}</h3>
            <p className="text-sm text-gray-500">{subtitle}</p>
          </div>
          <div className="text-black">
            {isOpen ? '-' : '+'}
          </div>
        </div>
      </button>
      {isOpen && <div className={`p-4 bg-white text-black ${isLast ? 'rounded-b-lg' : ''}`}>{content}</div>}
    </div>
  );
};

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  return <div className="mt-10 mr-10 pr-5 pl-5 pt-5 pb-10 w-3/5 mx-auto shadow-lg rounded-lg bg-white">
    {children}
  </div>;
};

export default function App() {
  const introToSolomon = "Solomon is your AI-powered business operations manager. Designed to streamline your day-to-day activities. Solomon can automate tasks, optimize resources, and provide actionable insights that may not have otherwise been discoverable. Freeing you to focus on what matters most for your business.";
  const seamlessCommunication = "Solomon brings email right into your chat client, allowing you to share important notes directly with your team and business circles. No need for multiple tabs or apps. Enhance your workflow efficiency and keep everyone in the loop effortlessly.";
  const intelligentDocumentManagement = "Solomon can ingest thousands of documents into our secure directory, providing you with lightning-fast, in-depth insights. Eliminate the time spent sifting through files and get straight to actionable data.";
  const machineLearningAnalytics = "Using the latest machine-learning algorithms, Solomon analyzes your business data to offer actionable insights. From customer service to financial planning, make informed decisions quickly and confidently. Win more business with better copy, and tighten up your contrcts with the latest legal verbiage.";
  const affordableAccess = "Get a taste of Solomon's capabilities with our limited preview, available for just $35 a month. This offer allows you to experience some of the revolutionary features that Solomon brings to small businesses. Mini-Solomon is meant to be a preview of our general capabilities. Whereas Solomon at an enterprise level is a high-performance multi-expert model with an infrastructure of tasks that can be completed at your request. With Mini-Solomon, you still have unlimited file-uploads up to 10mb per file, and unlimited conversations per User. Ask your local representitive what more Solomon-Enterprise can do for you! Email: sales@acdc.digital to learn more.";
  
  return (
    <div style={{ backgroundColor: "#E9E9E5" }}>
  <div className="text-3xl text-[#3E28DE] pt-20 p-5 text-left pl-32">
    Unlocking Solomon: Your AI-Powered Business Operations Manager!
  </div>
  <div className="text-md text-[#444] pb-2 text-left ml-20 pl-12 max-w-[1200px]">
    Our flagship Large Language Model. Solomon has been designed with small business in mind. Execute routine and mundane tasks with ease. Enhance your memory. Find the devil in the details quickly. Solomon is your front-desk agent, allowing you to focus on what matters most.
  </div>
      <div className="grid grid-cols-2 -ml-40">  {/* Adjusted the left margin here */}

        <div>
          <Accordion>
            <AccordionItem
              title="Meet Solomon"
              subtitle="Press to Expand"
              content={introToSolomon}
              isFirst={true}
            />
            <AccordionItem
              title="Seamless Communication"
              subtitle="Press to Expand"
              content={seamlessCommunication}
            />
            <AccordionItem
              title="Intelligent Document Management"
              subtitle="Press to Expand"
              content={intelligentDocumentManagement}
            />
            <AccordionItem
              title="Machine-Learning Analytics"
              subtitle="Press to Expand"
              content={machineLearningAnalytics}
            />
            <AccordionItem
              title="Affordable Access"
              subtitle="Press to Expand"
              content={affordableAccess}
              isLast={true}
            />
          </Accordion>
        </div>
        <div className="relative h-[550px] w-[750px] mt-10 rounded-lg shadow-lg">
        <Image
          src="/cook-sample.png"  // Make sure this path is correct
          alt="Your SVG Description"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
            />
  <div className="text-black text-sm mt-4 mx-auto max-w-[750px] text-center">
    Preview image of Solomon-Mini; Sign-up to Chat with your Documents now.
  </div>
</div>
      </div>
    </div>
  );
}

