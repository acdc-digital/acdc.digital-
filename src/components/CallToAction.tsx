import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  outerCta: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: '0 20px',
    backgroundColor: '#E9E9E5',
  },
  cta: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    color: '#000000',
    padding: '1rem',
    maxWidth: '80%',
    width: '100%',
    borderRadius: '0.5rem',
    background: '#323232',
    position: 'relative',
    marginTop: '1.5rem',
    marginLeft: '6.5rem',
    marginRight: '14rem',
    paddingBottom: '3.5rem',
    boxShadow: '0px -2px 2px rgba(0, 0, 0, 0.05), 0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  ctaContentP: {
    fontSize: '18px',
    lineHeight: '30px',
    fontWeight: 500,
    fontFamily: 'Arial, sans-serif',
    color: 'white',
    paddingLeft: '1rem',

  },
  ctaContentH3: {
    fontSize: '26px',
    lineHeight: '45px',
    fontWeight: 800,
    fontFamily: 'Arial, sans-serif',
    color: 'white',
    paddingLeft: '1rem',
  },
  slashedPrice: {
    position: 'absolute',
    bottom: '3rem',
    right: '4rem',
    fontSize: '36px',
    fontFamily: 'Marker Felt, cursive',
    color: 'white',
  },
  slashedPriceLine: {
    position: 'absolute',
    width: '100%',
    height: '4px',
    backgroundColor: '#DE2828',
    top: '50%',
    left: 0,
    transform: 'rotate(-5deg)',
  },
  newOffer: {
    position: 'absolute',
    top: '5.5rem',
    left: '1rem',
    fontSize: '16px',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    paddingLeft: '1rem',
  },
  underlinedPrice: {
    fontSize: '24px',
    position: 'relative',
    top: '0.25rem',
    fontFamily: 'Arial, sans-serif',
    color: '#3E28DE',
  },
  subtext: {
    fontSize: '0.75rem',
    marginTop: '1.5rem',
    maxWidth: '1200px',
    color: 'black',
    paddingLeft: '7rem',
  },
};

const CallToAction: React.FC = () => (
  <div style={styles.outerCta}>
    <div style={styles.cta}>
      <p style={styles.ctaContentP}>
        Preview the Future of Document Management with Early Access to Mini-Solomon!
      </p>
      <h3 style={styles.ctaContentH3}>
        Start Small, Think Big! Unlock Cost-Effective AI for Your Data.
      </h3>
      <div style={styles.slashedPrice}>
        $34.99/month
        <div style={styles.slashedPriceLine}></div>
      </div>
      <span style={styles.newOffer}>
        Try Free for a Limited Time. Login to get started.{' '}
        <span style={{ paddingLeft: '0.25rem', paddingRight: '0.25rem' }}>
          <span style={{ ...styles.underlinedPrice, background: '#3E28DE', color: 'white', borderRadius: '0.25rem' }}>
          
          </span>
        </span>
        
      </span>
    </div>
    
    {/* Subtext */}
    <div style={styles.subtext}>
      Solomon-Mini is a demonstration Chatbot which enables our customers to have a limited preview of A.I. capabilities. You can load individual documents 10mb or less, and Solomon will use the vast knowledge of the internet, along with the context of your document, to answer any questions you might have. In this version, we do not accept huge files, calculate math, or use advanced features like email or conversation history. A list of enterprise features can be found below for more information on how we can help. Solomon-Mini can help eliminate administrative burden and make most jobs more enjoyable in a conversational format. We recommend trying it out, and if you&apos;re not getting enough, let&apos;s meet to discuss how we can help further.
    </div>
  </div>
);

export default CallToAction;




