// HomeHero.tsx
'use client'
import React from 'react';
import Image from 'next/image';

const styles = {
  outerHero: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    minHeight: '20vh',
    width: '100%',
    paddingTop: '4rem',
    paddingLeft: '2rem',
    paddingBottom: '2rem',
    backgroundColor: '#E9E9E5',
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: '20px',
    marginRight: '6rem',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'black',
    display: 'inline',
    marginLeft: '4.5rem',
  },
  heroSubtitle: {
    fontSize: '4.5rem',
    color: '#3E28DE',
    fontWeight: 'bold',
    display: 'inline',
    marginLeft: '1rem',
  },
  heroSubtitle2: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: 'black',
    marginTop: '-2rem',
    marginBottom: '0rem',
    marginLeft: '5rem',
  },
  heroDescription: {
    maxWidth: '750px',
    fontSize: '1.2rem',
    marginTop: '1rem',
    color: 'black',
    paddingLeft: '5rem',
  },
  heroImage: {
    paddingTop: '0rem',
    marginTop: '0rem',
    marginLeft: '-2rem',
  },
  tagline: {
    fontSize: '0.75rem',
    marginTop: '1.5rem',
    maxWidth: '600px',
    color: 'black',
    paddingLeft: '5rem',
  },
  emailChip: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#3E28DE',  // Blue font color
    border: '1px solid #3E28DE',  // Red border color
    borderRadius: '18px',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    display: 'inline-block',
    marginLeft: '0rem',
  },
};

const HomeHero: React.FC = () => (
  <div style={styles.outerHero}>
    <div style={styles.heroContent}>
      {/* Title */}
      <div style={{ marginBottom: '0.5rem' }}>
        <h1 style={styles.heroTitle}>The Next</h1>
        <h1 style={styles.heroSubtitle}>Revolution</h1>
      </div>

      {/* Subtitle */}
      <h2 style={styles.heroSubtitle2}>In Business Operations.</h2>

      {/* Description */}
      <p style={styles.heroDescription}>
        Unlock the full potential of your data. Streamline processes. Gain actionable insights. Elevate your business to new heights with a new suite of digital intelligence.
      </p>

      {/* Tagline */}
      <div style={styles.tagline}>
        Since 2022, the annual growth rate for the adoption of artificial intelligence was over 36% and continues growing. Over 54% of businesses across North America have adopted A.I in some way. Are you ready to join them?<br></br><br></br>

        {/* Email chip */}
        <div style={styles.emailChip}>
          Email: sales@acdc.digital to get started
        </div>
      </div>
    </div>

    {/* Image */}
    <div style={styles.heroImage}>
      <Image src="/hero-logo.svg" alt="Header Logo" width={450} height={350} />
    </div>
  </div>
);

export default HomeHero;




