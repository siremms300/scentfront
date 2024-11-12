import React, { useState } from 'react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Show popup on form submission
    setShowPopup(true);
    // Clear form data
    setFormData({ name: '', email: '', message: '' });
    // Hide the popup after a short delay
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', color: '#333' }}>
      <h1 style={{ color: '#E8C96B', fontSize: '2em', marginBottom: '10px' }}>
        Contact Us
      </h1>
      <p style={{ marginBottom: '20px' }}>
        We'd love to hear from you! Please fill out the form below.
      </p>

      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', textAlign: 'left', marginBottom: '5px' }}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '1em'
            }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', textAlign: 'left', marginBottom: '5px' }}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '1em'
            }}
          />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block', textAlign: 'left', marginBottom: '5px' }}>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '1em',
              minHeight: '100px'
            }}
          ></textarea>
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#E8C96B',
            color: '#000',
            border: 'none',
            borderRadius: '4px',
            fontSize: '1em',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </form>

      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#333',
            color: '#fff',
            padding: '10px 20px',
            borderRadius: '5px',
            fontSize: '1em',
            zIndex: 1000
          }}
        >
          Thank you for contacting us, we will get back to you soon!
        </div>
      )}
    </div>
  );
};

export default ContactUsPage;
