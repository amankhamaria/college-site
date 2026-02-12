import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUsPremium = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="font-sans text-gray-800">

      {/* Header */}
      <header className="bg-blue-900 text-white py-6 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-2xl font-bold">ABC College</h1>
          <nav className="space-x-4">
            <a href="/" className="hover:text-gray-300 transition">Home</a>
            <a href="/about" className="hover:text-gray-300 transition">About</a>
            <a href="/contact" className="hover:text-gray-300 font-semibold transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section 
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1564869736590-1c8c4e4fa35b?auto=format&fit=crop&w=1400&q=80')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-2xl px-4">
          <h2 className="text-5xl font-bold mb-4 animate-pulse">Contact ABC College</h2>
          <p className="text-lg">
            Questions? Suggestions? Get in touch with us and we'll respond promptly.
          </p>
        </div>
      </section>

      {/* Contact Form + Illustration */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div data-aos="fade-right">
            <h3 className="text-3xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Your Name" className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
                <input type="email" placeholder="Email Address" className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
              </div>
              <input type="tel" placeholder="Phone Number" className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
              <input type="text" placeholder="Subject" className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
              <textarea placeholder="Your Message" rows="6" className="border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"></textarea>
              <button type="submit" className="bg-blue-900 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 w-full md:w-auto">
                Send Message
              </button>
            </form>
          </div>

          {/* Illustration Image */}
          <div data-aos="fade-left" className="flex justify-center">
            <img src="https://images.unsplash.com/photo-1581091012184-7d2e61bcd69b?auto=format&fit=crop&w=600&q=80" alt="Contact Illustration" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* Address Section with Map */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center" data-aos="fade-up">
          <h3 className="text-3xl font-semibold mb-6">Our Location</h3>
          <p className="mb-2">123 College Road, City, State, 123456</p>
          <p className="mb-2">Phone: +91 12345 67890</p>
          <p className="mb-6">Email: info@abccollege.edu</p>
          <div className="w-full h-64 rounded-md overflow-hidden shadow-lg">
            <iframe
              title="college-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0861!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c43!2sSan%20Francisco!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl text-center" data-aos="fade-up">
          <h3 className="text-3xl font-semibold mb-12">College Highlights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition">
              <h4 className="font-bold mb-2">Annual Fest</h4>
              <p>Experience our annual cultural and technical fest every year!</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition">
              <h4 className="font-bold mb-2">Workshops</h4>
              <p>Enhance skills through our regular workshops and seminars.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg shadow-lg hover:shadow-xl transition">
              <h4 className="font-bold mb-2">Placements</h4>
              <p>Top companies visit our campus for student placements annually.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 text-center" data-aos="fade-up">
        <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
        <div className="flex justify-center space-x-6 text-blue-900">
          <a href="#" className="hover:text-blue-700 transition">Facebook</a>
          <a href="#" className="hover:text-blue-700 transition">Instagram</a>
          <a href="#" className="hover:text-blue-700 transition">LinkedIn</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          © 2026 ABC College. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default ContactUsPremium;
