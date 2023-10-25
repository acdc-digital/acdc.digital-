import React from 'react';

interface StepProps {
    title: string;
    content: string;
    listItems: string[];
    iconSrc: string;
}

const Step: React.FC<StepProps> = ({ title, content, listItems, iconSrc }) => (
    <div style={{
        width: '18%',
        background: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        padding: '1rem',
        transition: 'all 0.3s ease-in-out',
        cursor: 'pointer',
    }}>
        <div style={{ marginBottom: '1rem' }}>
            <img 
                src={iconSrc} 
                alt={`Icon for ${title}`} 
                style={{ width: '90px', height: '90px' }}
            />
        </div>
        <h2 style={{ fontSize: '1.5rem', color: '#3E28DE', fontWeight: 'bold', marginBottom: '1rem' }}>{title}</h2>
        <p style={{ color: '#777', marginBottom: '1rem' }}>{content}</p>
        <ul>
            {listItems.map((item, index) => (
                <li key={index} style={{ color: '#555', marginBottom: '0.5rem' }}>{item}</li>
            ))}
        </ul>
    </div>
);

const FiveStepProcess: React.FC = () => {
    const steps = [
        {
            title: 'Step 1',
            content: 'Initial Consultation:\n We meet with you to understand your business goals and set objectives.',
            listItems: ['Discuss needs', 'Set objectives', 'Clarify expectations'],
            iconSrc: '/nobg-icon-s1.png', // Example icon paths
        },
        {
            title: 'Step 2',
            content: 'Planning: We outline your project, create milestones, and set timelines.',
            listItems: ['Budgeting', 'Timeline', 'Resource Allocation', 'Report Creation'],
            iconSrc: '/nobg-icon-s2.png',
        },
        {
            title: 'Step 3',
            content: 'Execution: Development starts and we ensure all deliverables meet your standards.',
            listItems: ['Development', 'Quality Assurance', 'User Acceptance Testing'],
            iconSrc: '/nobg-icon-s3.png',
        },
        {
            title: 'Step 4',
            content: 'Launch: We set your project live and monitor its initial performance.',
            listItems: ['Go Live', 'Monitoring', 'Performance Analytics', 'Client Success'],
            iconSrc: '/nobg-icon-s4.png',
        },
        {
            title: 'Step 5',
            content: 'Post-launch: We provide ongoing support and updates for long-term success.',
            listItems: ['Support', 'Updates', 'Quarterly Performance Review'],
            iconSrc: '/nobg-icon-s5.png',
        },
      ];

      return (
          <>
              <div className="text-3xl text-[#3E28DE] pt-20 p-5 text-left pl-32">
                  Our Five-Step Process
              </div>
              <div className="text-md text-[#444] pb-10 text-left ml-20 pl-12 max-w-[1400px]">
                  Transform your business one step at a time: <br></br>1. Lets meet to discuss if were a good fit for your company.<br></br> 2. If we are, we&apos;ll provide a full report at no-charge outlining all the ways we can inject A.I into your business. Your report includes an overview of your current digital implementations, Good/ Better/ Best cost scenarios for improvement, and Return-on-Investment analysis.
                  <br></br> 3. If approved, we&apos;ll begin building your application as defined in your report.<br></br> 4. Next, we&apos;ll have a technician install our models on your computers for you, so that you can get started using the new technology without the learning curve.<br></br> 5. Your updates are free for life, and we'll provide quarterly diagnostics to ensure everything is working as expected. 
              </div>
              <div style={{
                  background: '#F8F9FF',
                  padding: '2rem',
                  borderRadius: '0.6rem',
                  margin: '0 8rem',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
              }}>
                  <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      gap: '1rem',
                  }}>
                      {steps.map((step, index) => (
                          <Step key={index} {...step} />
                      ))}
                  </div>
              </div>
          </>
      );
  };
  
  export default FiveStepProcess;





