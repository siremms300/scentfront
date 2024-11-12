
// src/pages/AboutPage.jsx
import React from 'react';

const AboutPage = () => {
  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '2rem', color: 'black' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center', color: '#E8C96B' }}>
        About Scents by Butterfly
      </h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#E8C96B' }}>Our Story</h2>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'black' }}>
          Scents by Butterfly is a perfume e-commerce store dedicated to bringing you an exquisite collection of fragrances. Our journey started with a passion for high-quality scents that captivate the senses and elevate moments. We believe in offering only the best, with a commitment to quality and customer satisfaction.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#E8C96B' }}>Our Mission</h2>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'black' }}>
          Our mission is to help you find the perfect fragrance that matches your style and personality. Every scent we offer has been carefully selected to ensure it meets our standards of elegance and quality.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#E8C96B' }}>Why Choose Us?</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', color: 'black', fontSize: '1.125rem', lineHeight: '1.8' }}>
          <li>Curated selection of premium fragrances.</li>
          <li>Exceptional customer service to guide your scent journey.</li>
          <li>High-quality, long-lasting perfumes that leave a lasting impression.</li>
          <li>Commitment to sustainability and eco-friendly practices.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#E8C96B' }}>Contact Us</h2>
        <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'black' }}>
          Have questions or need assistance? Feel free to reach out to our support team at{' '}
          <a href="mailto:support@scentsbybutterfly.com" style={{ color: '#E8C96B', textDecoration: 'underline' }}>
            support@scentsbybutterfly.com
          </a>
          . We’re here to help you find the perfect fragrance!
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
