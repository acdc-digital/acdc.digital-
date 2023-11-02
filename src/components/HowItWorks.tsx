import React from 'react';
import Image from 'next/image'; 

const HowItWorks: React.FC = () => {
  return (
    <div style={{
      background: 'linear-gradient(to right, #4a5568, #1a202c, #2d3748)',
	  marginTop: '2rem',
      paddingTop: '2rem',
	  paddingBottom: '2rem',
	  paddingLeft: '2rem',
	  paddingRight: '2rem',
      borderRadius: '0.6rem',
      margin: '0 8rem',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '1rem',
      }}>
        <div style={{
          width: '30%', // Adjust this if you want the containers to be larger or smaller
          background: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          padding: '1rem',
          transition: 'all 0.3s ease-in-out',
          cursor: 'pointer',
        }}>
          <Image 
            src="/HIW1.png" 
            alt="Description of Image 1" 
            layout="fill" 
            objectFit="cover"
          />
        </div>

        <div style={{
          width: '30%',
          background: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          padding: '1rem',
          transition: 'all 0.3s ease-in-out',
          cursor: 'pointer',
        }}>
          <Image 
            src="/HIW2.png" 
            alt="Description of Image 2" 
            layout="fill" 
            objectFit="cover"
          />
        </div>

        <div style={{
          width: '30%',
          background: 'white',
          borderRadius: '0.5rem',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          padding: '1rem',
          transition: 'all 0.3s ease-in-out',
          cursor: 'pointer',
        }}>
          <Image 
            src="/image3.png" 
            alt="Description of Image 3" 
            layout="fill" 
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;


