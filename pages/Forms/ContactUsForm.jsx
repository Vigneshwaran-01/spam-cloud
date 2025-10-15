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
    <div className="w-full">
      <form onSubmit={onSubmit} className="space-y-6">
        {/* Form Fields Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Name Field */}
            <div className="form-group">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Full Name *
              </label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-200 hover:border-slate-400" 
                placeholder="Enter your full name"
                required 
              />
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address *
              </label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-200 hover:border-slate-400" 
                placeholder="your.email@company.com"
                required 
              />
            </div>

            {/* Phone Field */}
            <div className="form-group">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Phone Number *
              </label>
              <input 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-200 hover:border-slate-400" 
                placeholder="+1 (555) 123-4567"
                required 
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {/* Company Field */}
            <div className="form-group">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Company Name
              </label>
              <input 
                type="text" 
                name="company" 
                value={formData.company} 
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-200 hover:border-slate-400" 
                placeholder="Your company name"
              />
            </div>

            {/* Service Field */}
            <div className="form-group">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Service Interest *
              </label>
              <select 
                name="service" 
                value={formData.service} 
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-200 hover:border-slate-400 cursor-pointer" 
                required
              >
                <option value="Incoming Spam Filter">Incoming Spam Filter</option>
                <option value="Outgoing Spam Filter">Outgoing Spam Filter</option>
                <option value="Email Archiving">Email Archiving</option>
                <option value="carbonio">Carbonio Mail</option>
                <option value="High availability">High Availability</option>
              </select>
            </div>

            {/* Subject Field */}
            <div className="form-group">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Subject *
              </label>
              <input 
                type="text" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-200 hover:border-slate-400" 
                placeholder="Brief subject of your inquiry"
                required 
              />
            </div>
          </div>
        </div>

        {/* Message Field - Full Width */}
        <div className="form-group">
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Message
          </label>
          <textarea 
            name="message" 
            rows="4" 
            value={formData.message} 
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-200 hover:border-slate-400 resize-vertical"
            placeholder="Tell us about your email security needs and any specific requirements..."
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button 
            type="submit" 
            disabled={state.isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
          >
            {state.isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending Message...
              </>
            ) : (
              <>
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
