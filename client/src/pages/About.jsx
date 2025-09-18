import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { assets } from '../assets/assets';
import { Users, Lightbulb, Shield, Clock, Zap, HeartHandshake } from 'lucide-react';

const About = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="px-4 sm:px-20 xl:px-32 pt-24 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50 bg-cover bg-no-repeat">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            About <span className="text-primary">QuickAI</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Empowering creators, businesses, and innovators with cutting-edge AI tools to transform ideas into stunning content.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="px-4 sm:px-20 xl:px-32 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                At QuickAI, we believe that powerful AI tools should be accessible to everyone. Our mission is to democratize access to cutting-edge AI technology, making it intuitive and useful for creators of all skill levels.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We're dedicated to building tools that solve real problems, save time, and unlock creative potential. Whether you're a professional content creator, business owner, or hobbyist, our suite of AI tools helps you achieve more with less effort.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-1">
                <div className="bg-white rounded-lg p-4">
                  <img 
                    src={assets.user_group} 
                    alt="Our Team" 
                    className="w-full h-auto rounded-lg shadow-xl" 
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
                <Users className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="px-4 sm:px-20 xl:px-32 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <div className="mt-2 w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <p className="text-gray-600 mb-6 leading-relaxed">
              QuickAI was born from a simple observation: while AI tools were becoming more powerful, they remained inaccessible to many due to technical complexity or prohibitive costs.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 2023 by a team of AI enthusiasts and experienced developers, we set out to create a platform that combines powerful AI capabilities with an intuitive, user-friendly interface.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, QuickAI serves thousands of users worldwide, from individual content creators to enterprise teams, all united by the desire to create exceptional content efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="px-4 sm:px-20 xl:px-32 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            <div className="mt-2 w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-gradient-to-br from-blue-500 to-primary rounded-full p-3 inline-block mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                We constantly push the boundaries of what's possible with AI, staying at the forefront of technological advancements.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-3 inline-block mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Trust & Privacy</h3>
              <p className="text-gray-600">
                We prioritize your data security and privacy, ensuring responsible use of AI technology in all our tools.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-full p-3 inline-block mb-4">
                <HeartHandshake className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">User-Centered</h3>
              <p className="text-gray-600">
                Every feature we build starts with our users' needs, ensuring our tools solve real problems effectively.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="px-4 sm:px-20 xl:px-32 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose QuickAI</h2>
            <div className="mt-2 w-24 h-1 bg-primary mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Our platform stands out with a unique combination of powerful features and thoughtful design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 h-fit rounded-lg">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Lightning-Fast Results</h3>
                <p className="text-gray-600">
                  Our optimized AI models deliver high-quality results in seconds, not minutes, saving you valuable time.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 h-fit rounded-lg">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">All-in-One Platform</h3>
                <p className="text-gray-600">
                  Access multiple AI tools in one place—from content writing to image generation and enhancement.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 h-fit rounded-lg">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Community-Driven</h3>
                <p className="text-gray-600">
                  Join thousands of creators who share tips, showcase their work, and inspire each other daily.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-4">
              <div className="bg-primary/10 p-3 h-fit rounded-lg">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Continuous Innovation</h3>
                <p className="text-gray-600">
                  We're constantly adding new tools and improving existing ones based on user feedback and technological advances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-4 sm:px-20 xl:px-32 py-16 bg-gradient-to-r from-blue-600 to-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your content creation?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who are already using QuickAI to produce stunning content faster than ever before.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300">
              Get Started Now
            </button>
            <button className="bg-transparent border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default About;