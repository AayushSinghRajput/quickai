import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, MapPin, Phone, Send, Clock, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id === 'first_name' ? 'firstName' : 
       id === 'last_name' ? 'lastName' : id]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.email || !formData.message) {
      toast.error('Email and message are required');
      return;
    }
    
    try {
      setIsSubmitting(true);
      
      const apiUrl = `${import.meta.env.VITE_API_URL}/api/contact/submit`;
      console.log('Submitting form to:', apiUrl);
      console.log('Form data:', formData);
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      console.log('Response status:', response.status);
      
      const data = await response.json();
      console.log('Response data:', data);
      
      if (data.success) {
        toast.success('Message sent successfully!');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        toast.error(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Network error: ' + (error.message || 'Something went wrong. Please try again later.'));
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="px-4 sm:px-20 xl:px-32 pt-24 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50 bg-cover bg-no-repeat">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Have questions about our AI tools? Need help with your account? We're here to help you.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="px-4 sm:px-20 xl:px-32 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300">
              <div className="mx-auto bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <Mail className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-600 mb-3">Our friendly team is here to help.</p>
              <a href="mailto:aayushsinghrajput3003@gmail.com" className="text-primary hover:underline font-medium">
                aayushsinghrajput3003@gmail.com
              </a>
            </div>

            {/* Office */}
            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300">
              <div className="mx-auto bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <MapPin className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Office</h3>
              <p className="text-gray-600 mb-3">Come say hello at our office HQ.</p>
              <p className="text-gray-800">
                Dharan, Sunsari<br />
                Nepal
              </p>
            </div>

            {/* Phone */}
            <div className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all duration-300">
              <div className="mx-auto bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                <Phone className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 mb-3">Mon-Fri from 9am to 5pm.</p>
              <a href="tel:+1(555)123-4567" className="text-primary hover:underline font-medium">
                +977 (980) 598-1168
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="px-4 sm:px-20 xl:px-32 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Send us a message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 mb-1">
                      First name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-700 mb-1">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Tell us about your question or issue..."
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 disabled:bg-primary/70 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" /> Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* Additional Info */}
            <div className="self-center">
              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">We're here to help</h3>
                <p className="text-gray-600">
                  Have a question about our AI tools? Need help troubleshooting? Our support team is ready to assist you with any questions or concerns you might have.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 5:00 PM PST<br />Weekend: Closed</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Support</h4>
                    <p className="text-gray-600 text-sm">For technical support:<br />aayushsinghrajput3003@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Headquarters</h4>
                    <p className="text-gray-600 text-sm">Dharan, Sunsari<br />Nepal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 sm:px-20 xl:px-32 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-gray-600">
              Find answers to the most common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">How do I upgrade to a premium plan?</h3>
              <p className="text-gray-600">
                You can upgrade to our premium plan by visiting your account dashboard and clicking on the "Upgrade" button. Follow the instructions to complete the payment process.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal for subscription payments.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Can I cancel my subscription at any time?</h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your billing period.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-2">How can I request a refund?</h3>
              <p className="text-gray-600">
                If you're not satisfied with our service, please contact our support team at support@quickai.com within 14 days of your purchase to request a refund.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Contact;