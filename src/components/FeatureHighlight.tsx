'use client'
import React, { useState } from 'react';

interface Feature {
  title: string;
  description: string;
  imgSrc: string;
}

const features: Feature[] = [
  {
    title: 'Solomon: Next-Generation Document Interaction and Business Intelligence',
    description: 'Harness the capabilities of AI-driven Natural Language Processing to manage your digital assets. Solomon enables seamless document retrieval, email automation, and business analytics using advanced machine learning algorithms. A quintessential tool for elevating operational efficiency.',
    imgSrc: '/feature-soloG.png',
  },
  {
    title: 'Infopulse: The Future of Employee Training and Onboarding',
    description: 'Infopulse revolutionizes your HR approach by leveraging AI-based training modules. Reduce time-to-productivity with dynamic and customizable onboarding paths, designed to eliminate common bottlenecks and skill gaps. Employee training, redefined.',
    imgSrc: '/nobg-featurevue.png',
  },
  {
    title: 'FinVue: Financial Analytics Reimagined',
    description: 'Deciphering complex financial data is now effortless with FinVue. Utilizing advanced machine learning models, FinVue translates financial indicators into actionable insights, driving growth and cost-efficiency. Navigate the language of numbers with unparalleled clarity.',
    imgSrc: '/feature-finvu.png',
  },
  {
    title: 'ExpertiseOnDemand: Your 24/7 Business Consultancy Suite',
    description: 'ExpertiseOnDemand is the one-stop solution for all your business consulting needs. Our network of experts is available round the clock to provide specialized support in customer service, legal consultancy, marketing strategies, and more. AI-driven coordination ensures seamless service delivery.',
    imgSrc: '/feature-table.png',
  },
];

const FeatureHighlight: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<Feature | null>(null);

  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <h2 style={{ fontSize: '2rem', textAlign: 'left', margin: '20px 0', color: '#3E28DE', marginLeft: '8rem', marginTop: '4rem' }}>Discover Our Advanced Suite of Business Solutions</h2>
      <div className="text-md text-[#444] pb-6 text-left ml-20 mr-20 pl-12 max-w-[1400px]">
        <div className="h3-style">
          Unleash the potential of AI within your operations. Including website design, re-branding, email inbox organization, sentiment analysis, customer chatbots, and more. From startups to enterprises, we empower businesses of all sizes by integrating advanced cyber security, streamlining recruitment, and financial forecasting. Currently, 73% of businesses are utilizing chatbots to enhance customer communications. Notably, 92% of businesses have witnessed measurable outcomes from leveraging AI for business operations. 
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '2rem',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '0.6rem',
        margin: '0 8rem',
        background: '#F8F9FF',
      }}>
        <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', width: '100%' }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                margin: '20px',
                padding: '18px',
                boxShadow: '0px 7px 14px 0px rgba(0,0,0,0.1)',
                width: '250px',
                cursor: 'pointer',
                backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff',
                borderRadius: '10px',
                transition: 'transform 0.3s ease-in-out',
              }}
              onClick={() => setSelectedFeature(feature)}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img src={feature.imgSrc} alt={feature.title} style={{ width: '90%', borderRadius: '10px' }} />
              <h3 style={{ fontSize: '1.1rem', margin: '12px 0', color: '#3E28DE' }}>{feature.title.split(":")[0]}</h3>
              <p style={{ fontSize: '0.85em', color: '#555' }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedFeature && (
        <div style={{
          marginTop: '36px',
          padding: '27px',
          width: '63%',
          boxShadow: '0px 7px 14px 0px rgba(0,0,0,0.1)',
          textAlign: 'center',
          backgroundColor: '#fff',
          borderRadius: '10px'
        }}>
          <h3 style={{ fontSize: '1.35em', margin: '9px 0', color: '#3E28DE' }}>{selectedFeature.title}</h3>
          <img src={selectedFeature.imgSrc} alt={selectedFeature.title} style={{ width: '45%', borderRadius: '10px' }} />
          <p style={{ fontSize: '0.9em', color: '#555', marginTop: '18px' }}>{selectedFeature.description}</p>
        </div>
      )}
    </section>
  );
};

export default FeatureHighlight;














