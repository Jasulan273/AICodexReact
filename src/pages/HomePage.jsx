import { useState } from 'react';
import { Link } from 'react-router-dom';
import team from '../assets/team.png'
import logo from '../assets/logo.png'

export default function HomePage() {


  return (
    <div className="min-h-screen bg-white font-sans">

      <header className="w-full bg-white shadow-sm fixed top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <img src={logo} width="50px" className='scale-[3]' alt="" />
          <button
            
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
          >
           <Link to="/auth/login" className="text-white hover:text-blue-600 transition duration-200">
           Login / Register
                  </Link>
          </button>
        </div>
      </header>

  

 
<section
        className="pt-24 pb-16 flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://nalogikz.kz/wp-content/uploads/2024/12/8-7-1024x576-1.jpg')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your Tax Code AI Assistant
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Get instant, accurate answers to your tax-related questions based on the Tax Code of Kazakhstan.
          </p>
          <Link
            to="/auth"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Who We Are
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src={team}
                alt="Team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-600 text-lg leading-relaxed">
                We are a team of experts dedicated to simplifying tax-related queries for individuals and businesses in Kazakhstan. Our AI-powered assistant leverages the latest technology to provide accurate and reliable answers based on the Tax Code of Kazakhstan.
              </p>
            </div>
          </div>
        </div>
      </section>

   
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">
            Why Use Our Assistant?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Answers</h3>
              <p className="text-gray-600">
                Get instant responses to your tax questions without waiting for a consultant.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Accurate Information</h3>
              <p className="text-gray-600">
                Our AI is trained on the official Tax Code of Kazakhstan to ensure reliable answers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 8c-2.761 0-5-1.343-5-3V9a5 5 0 0110 0v4c0 1.657-2.239 3-5 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Access our assistant anytime, anywhere, to get the help you need.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-gray-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Ready to Simplify Your Tax Queries?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust our AI assistant to navigate the complexities of the Tax Code.
          </p>
          <Link
            to="/auth"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Start Now
          </Link>
        </div>

        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-100 rounded-full opacity-30 -translate-x-16 translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-200 rounded-full opacity-30 translate-x-20 -translate-y-20"></div>
      </section>

   
      <footer className="py-12 bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
       
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tax Code AI</h3>
              <p className="text-gray-600 leading-relaxed">
                Your trusted assistant for navigating the Tax Code of Kazakhstan with ease and accuracy.
              </p>
            </div>
          
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/auth" className="text-gray-600 hover:text-blue-600 transition duration-200">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/auth" className="text-gray-600 hover:text-blue-600 transition duration-200">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
     
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="text-gray-600">
                  Email: <a href="mailto:support@taxcodeai.kz" className="hover:text-blue-600 transition duration-200">support@taxcodeai.kz</a>
                </li>
                <li className="text-gray-600">
                  Phone: <a href="tel:+77271234567" className="hover:text-blue-600 transition duration-200">+7 (727) 123-45-67</a>
                </li>
              </ul>
            </div>
      
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.56c-.89.39-1.84.65-2.83.77 1.02-.61 1.8-1.58 2.17-2.73-.95.56-2 .97-3.12 1.19-.9-.96-2.18-1.56-3.6-1.56-2.72 0-4.93 2.21-4.93 4.93 0 .39.04.77.13 1.13-4.1-.21-7.74-2.17-10.18-5.15-.43.74-.67 1.6-.67 2.52 0 1.71.87 3.22 2.19 4.1-.81-.03-1.57-.25-2.24-.62v.06c0 2.39 1.7 4.38 3.95 4.83-.41.11-.85.17-1.3.17-.32 0-.63-.03-.93-.09.63 1.97 2.45 3.4 4.61 3.44-1.69 1.32-3.82 2.11-6.13 2.11-.4 0-.79-.02-1.18-.07 2.19 1.4 4.79 2.22 7.58 2.22 9.1 0 14.07-7.54 14.07-14.07 0-.21 0-.42-.01-.63.96-.69 1.8-1.56 2.46-2.55z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12.04c0-5.52-4.48-10-10-10z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.54 0H4.46C2 0 0 2 0 4.46v15.08C0 22 2 24 4.46 24h15.08C22 24 24 22 24 19.54V4.46C24 2 22 0 19.54 0zM8.08 19.2H4.8V9.6h3.28v9.6zm-1.64-10.8c-1.08 0-1.96-.88-1.96-1.96s.88-1.96 1.96-1.96 1.96.88 1.96 1.96-.88 1.96-1.96 1.96zm13.76 10.8h-3.28v-5.2c0-1.24-.44-2.08-1.56-2.08-.84 0-1.36.56-1.56 1.12-.08.2-.12.48-.12.76v5.4H10.4V9.6h3.28v1.44c.48-.72 1.28-1.76 3.12-1.76 2.28 0 4 1.48 4 4.68v5.24z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Tax Code AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}