import React from 'react';
import { Facebook, Twitter, Instagram, YouTube, LocationOn, Phone, Email } from '@mui/icons-material';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="flex items-center mb-2">
            <LocationOn className="mr-2" /> 1234 Street Name, City, Country
          </p>
          <p className="flex items-center mb-2">
            <Phone className="mr-2" /> +123 456 7890
          </p>
          <p className="flex items-center">
            <Email className="mr-2" /> contact@example.com
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2 hover:text-gray-400"><a href="#">Home</a></li>
            <li className="mb-2 hover:text-gray-400"><a href="#">About Us</a></li>
            <li className="mb-2 hover:text-gray-400"><a href="#">Services</a></li>
            <li className="mb-2 hover:text-gray-400"><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400"><Facebook /></a>
            <a href="#" className="hover:text-gray-400"><Twitter /></a>
            <a href="#" className="hover:text-gray-400"><Instagram /></a>
            <a href="#" className="hover:text-gray-400"><YouTube /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
          <p className="mb-4">Subscribe to our newsletter to get the latest updates.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-3 py-2 w-full rounded-l bg-gray-800 border border-gray-700 focus:outline-none"
            />
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-10 border-t border-gray-800 pt-4">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;