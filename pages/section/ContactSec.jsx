import { useState } from 'react';

export default function ContactSec() {
  const [formData, setFormData] = useState({
    Fname: '',
    Lname: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/submit-contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Submission failed');
      
      alert('Form submitted successfully!');
      setFormData({ Fname: '', Lname: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Submission failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#281b69] to-[#072463] text-white py-16 " id='contactForm'>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Get In Touch With our Anti Spam Experts</h2>

        <div className="grid md:grid-cols-2 gap-6 bg-white p-2 rounded-lg shadow-lg">
          <div className="hidden md:flex justify-center items-center">
            <img
              src="https://res.cloudinary.com/daggx9p24/image/upload/v1741238633/mail-sent-concept-illustration_rzzfkp.png"
              alt="Contact Illustration"
              className="w-80"
            />
          </div>

          <form onSubmit={onSubmit} className="p-3 rounded-xl">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="Fname"
                  placeholder="First Name"
                  className="p-3 border border-gray-700 rounded-lg text-gray-600 w-full bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
                  value={formData.Fname}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="Lname"
                  placeholder="Last Name"
                  className="p-3 border border-gray-700 rounded-lg text-gray-600 w-full bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
                  value={formData.Lname}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="p-3 border border-gray-700 rounded-lg text-gray-600 w-full bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone No."
                  className="p-3 border border-gray-700 rounded-lg text-gray-600 w-full bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                className="p-3 border border-gray-700 rounded-lg text-gray-600 w-full bg-gray-200 h-28 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-300 ease-in-out"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}