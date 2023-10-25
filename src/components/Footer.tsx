import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <footer style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        {/* First Column: Creative Element */}
        <div style={{
          width: '30%',
          textAlign: 'center',
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', marginTop: '-6rem', marginLeft: '2rem' }}>What Are You Waiting For?</h2>
          <div style={{
            display: 'inline-block',
            fontSize: '1rem',
            border: '1px solid #fff',
            borderRadius: '20px',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            paddingTop: '0.25rem',
            paddingBottom: '0.25rem',
            marginLeft: '1rem',
            marginTop: '1rem',
          }}>
            Contact sales@acdc.digital now
          </div>
        </div>

        {/* Second Column: ACDC.digital and Social Media */}
        <div style={{
          width: '30%',
          textAlign: 'center',
        }}>
          <div style={{
            display: 'inline-block',
            fontSize: '1.5rem',
            border: '2px solid #fff',
            borderRadius: '25px',
            paddingLeft: '2rem',
            paddingRight: '2rem',
            paddingTop: '0.25rem',
            paddingBottom: '0.25rem',
            marginBottom: '2rem',
            marginTop: '0.75rem',
          }}>
            ACDC.digital
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '5rem' }}>
           
          </div>
          <div style={{ borderTop: '1px solid #fff', paddingTop: '1rem' }}>
           { /* <button style={{ marginRight: '1rem' }}>Terms</button> */ }
            <button>Terms & Privacy</button> 
          </div>
        </div>

        {/* Third Column: Contact Us */}
        <div style={{
          width: '30%',
          textAlign: 'center',
        }}>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', marginTop: '-3rem' }}>Contact Us</h2>
          <p>ACDC.digital Inc.</p>
          <p>1969 Upper Water Street, <br></br>Halifax, Nova Scotia B3J 3R7</p>
          <p>Email: info@acdc.digital</p>
          <p>Phone: +1 (902) 209-3880</p>
        </div>
      </footer>
      {/* First aesthetic row */}
      <div style={{
        backgroundColor: '#646464',  // You can choose any color
        height: '1.5rem',  // You can adjust the height
        borderBottom: '1px solid'
      }}></div>
      {/* Second aesthetic row */}
      <div style={{
        backgroundColor: '#848484',  // You can choose any color
        height: '3rem',  // You can adjust the height
        borderBottom: '1px solid'
      }}></div>
    </>
  );
};

export default Footer;



