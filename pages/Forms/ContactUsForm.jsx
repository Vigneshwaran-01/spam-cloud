import { useState } from 'react';
import { contactusForm } from '../../lib/api';

const initState = { values: {}, isLoading: false };

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Incoming Spam Filter',
    subject: '', 
    email: '',
    company: '',
    message: ''
  });
  
  const [state, setState] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setState(prev => ({ ...prev, isLoading: true }));

    try {
      await contactusForm(formData);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        phone: '',
        service: 'Incoming Spam Filter',
        subject: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to submit form. Please try again later.');
    } finally {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  };

  return (
    <div className="contact-us-wrapper p-3 shadow rounded bg-white">
      <h2 className="mb-3 text-center">Contact Us</h2>
      <form onSubmit={onSubmit} className="p-4 text-white rounded-lg">
  <div className="row g-4"> {/* Increased gap for better spacing */}
    <div className="col-md-6 space-y-6"> {/* Vertical spacing between fields */}
      <div className="form-group">
        <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} 
          className="border border-gray-700 rounded-lg text-gray-600 w-full bg-gray-200 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out" required />
      </div>

      <div className="form-group">
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} 
          className="border border-gray-700 rounded-lg text-gray-600 w-full bg-gray-200 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out" required />
      </div>

      <div className="form-group">
        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} 
          className="border border-gray-700 rounded-lg text-gray-600 w-full bg-gray-200 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out" required />
      </div>

      <div className="form-group">
        <select name="service" value={formData.service} onChange={handleChange} 
          className="border border-gray-700 rounded-lg text-gray-600 w-full bg-gray-200 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out" required>
          <option value="Incoming Spam Filter" className='text-gray-600 w-full bg-gray-200'>Incoming Spam Filter</option>
          <option value="Outgoing Spam Filter" className='text-gray-600 w-full bg-gray-200'>Outgoing Spam Filter</option>
          <option value="Email Archiving" className='text-gray-600 w-full bg-gray-200'>Email Archiving</option>
          <option value="carbonio" className='text-gray-600 w-full bg-gray-200'>Carbonio</option>
          <option value="High availability" className='text-gray-600 w-full bg-gray-200'>High Availability</option>
        </select>
      </div>
    </div>

    <div className="col-md-6 space-y-6"> {/* Increased spacing between fields */}
      <div className="form-group">
        <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} 
          className="border border-gray-700 rounded-lg text-gray-600 w-full bg-gray-200  p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out" required />
      </div>

      <div className="form-group">
        <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} 
          className="border border-gray-700 rounded-lg text-gray-600 w-full bg-gray-200  p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out" />
      </div>

      <div className="form-group">
        <textarea name="message" rows="5" placeholder="Message" value={formData.message} onChange={handleChange} 
          className="border border-gray-700 rounded-lg text-gray-600 w-full bg-gray-200 p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"></textarea>
      </div>
    </div>
  </div>

  <div className="p-2 ">
    <button type="submit" className="btn btn-primary px-2 py-2 shadow-lg hover:shadow-blue-500/50 transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50" disabled={state.isLoading}>
      {state.isLoading ? 'Sending...' : 'Send Message'}
    </button>
  </div>
</form>
    </div>
  );
};

export default ContactUsForm;
