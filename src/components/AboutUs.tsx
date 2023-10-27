import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <>
      <div className="text-3xl text-[#3E28DE] pt-20 p-5 text-left pl-32">
        About Us
      </div>
      <div className="text-md text-[#444] pb-4 text-left pl-32 max-w-[1400px]">
        Welcome to ACDC.digital, your strategic partner in leveraging artificial intelligence to accelerate business growth. Founded with a mission to empower Atlantic Canadas small businesses, we specialize in reducing overhead and streamlining operations through our unique Machine-Information-Training-Personalization (MITP) approach. With two years of experience and a suite of customizable AI solutions, we deliver immediate and transformative benefits to your business. We pride ourselves on our commitment to transparency, quality, and personalized service. We are your partners in innovation and growth.
      </div>
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',  // Aligned items to the left
        background: 'linear-gradient(to right, #4a5568, #1a202c, #2d3748)',
        padding: '2rem',
        marginLeft: '8rem',
        marginRight: '10rem',
        marginTop: '2rem',
        marginBottom: '2rem',
        borderRadius: '0.6rem',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          width: '90%',
          marginLeft: '2rem',  // Added some left margin
        }}>
          {[
            {
              title: 'Who We Are',
              content: "At ACDC.digital, were more than just a digital agency. Were your partners in leveraging artificial intelligence to elevate your business. From brand development and competitive analysis to creating machine learning algorithms for chatbots and financial insights, we offer a range of services that go beyond the ordinary by using the latest technologies.",
            },
            {
              title: 'Our Mission',
              content: "Our mission is broad but focused: to empower small businesses across various sectors to operate more efficiently and grow exponentially. We integrate AI solutions that are tailored to your unique needs, taking the guesswork out of technology so you can focus on the most important aspects of running your business.",
            },
            {
              title: 'How We Work',
              content: "We offer a white-glove service that sets us apart. Our unique Machine-Information-Training-Personalization (MITP) approach ensures that we not only develop but also implement AI solutions tailored and personalized to your business. We provide the necessary training and ongoing support, ensuring theres always a human touch behind the technology.",
            },
            {
              title: 'Why Choose Us',
              content: "We pride ourselves on delivering projects faster and at a fraction of the cost, without compromising on quality. Were not just service providers; were your long-term strategic partners committed to exceeding expectations across the industry.",
            },
          ].map((section, index) => (
            <div key={index} style={{
              marginBottom: '2rem',
              padding: '1rem',
              borderRadius: '0.5rem',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',  // All sections get the box shadow
              background: 'white',  // All sections have a white background
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                color: '#3E28DE',
                fontWeight: 'normal',
                marginBottom: '1rem',
              }}>
                {section.title}
              </h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.5',
                color: '#555',
              }}>
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>
      <div className="text-md text-[#777] pb-20 text-center max-w-[1400px]">
        Thank you for your consideration in working with Atlantic Canadas Digital Consultants.
      </div>
    </>
  );
};

export default AboutUs;




