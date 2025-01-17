"use client";
import React from "react";
import {
  Heart,
  PawPrint,
  Users,
  DollarSign,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { UserButton } from "@/components/auth/user-button";
const HomePage = () => {
  return (
    <div className=" w-full min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-[600px]">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
            alt="Street dog being petted"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <nav className="relative z-10 container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-white">
              <PawPrint className="h-8 w-8" />
              <span className="text-2xl font-bold">PawsHope</span>
            </div>
            <div className="hidden md:flex space-x-8 text-white">
              <a href="/home" className="hover:text-yellow-400">
                Home
              </a>
              <a href="/joinUs" className="hover:text-yellow-400">
                Join Us
              </a>
              <a href="/needHelp" className="hover:text-yellow-400">
                Need Help
              </a>
              <a href="/contact" className="hover:text-yellow-400">
                Contact
              </a>
              <a href="/settings" className="hover:text-yellow-400">
                Setting
              </a>
            </div>
            {/* <button className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition">
              Donate Now
            </button> */}
            <Button
              onClick={() => (window.location.href = "/opportunities")}
              className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
              Donate Now
            </Button>

            <UserButton />
          </div>
        </nav>
        <div className="relative z-10 container mx-auto px-6 pt-20">
          <h1 className="text-5xl md:text-6xl font-bold text-white max-w-3xl">
            Give Hope to Street Animals One Paw at a Time
          </h1>
          <p className="text-xl text-gray-200 mt-6 max-w-2xl">
            Join us in making a difference in the lives of street animals. Your
            support provides food, medical care, and shelter to those who need
            it most.
          </p>
          <div className="mt-8 flex space-x-4">
            <Button
              onClick={() => (window.location.href = "/opportunities")}
              className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
            >
              Donate Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <button className="border-2 border-white text-white px-6 py-1 rounded-full font-semibold hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold mt-4">5000+</h3>
              <p className="text-gray-600">Animals Helped</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold mt-4">1000+</h3>
              <p className="text-gray-600">Active Volunteers</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <DollarSign className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-3xl font-bold mt-4">$200K+</h3>
              <p className="text-gray-600">Donations Raised</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">How We Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1527526029430-319f10814151"
                alt="Medical care"
                className="w-full h-48 object-cover rounded-lg mb-4"
                width={500}
                height={500}
              />
              <h3 className="text-xl font-bold mb-2">Medical Care</h3>
              <p className="text-gray-600">
                Providing emergency medical treatment, vaccinations, and regular
                health check-ups.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1"
                alt="Food and shelter"
                className="w-full h-48 object-cover rounded-lg mb-4"
                width={500}
                height={500}
              />
              <h3 className="text-xl font-bold mb-2">Food & Shelter</h3>
              <p className="text-gray-600">
                Regular feeding programs and temporary shelter for animals in
                need.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e"
                alt="Adoption"
                className="w-full h-48 object-cover rounded-lg mb-4"
                width={500}
                height={500}
              />
              <h3 className="text-xl font-bold mb-2">Adoption Program</h3>
              <p className="text-gray-600">
                Finding loving forever homes for rehabilitated street animals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                Have questions or want to get involved? Reach out to us!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-yellow-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-yellow-400" />
                  <span>help@pawshope.org</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-yellow-400" />
                  <span>123 Hope Street, City, Country</span>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-400"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-400"
              ></textarea>
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <PawPrint className="h-6 w-6 text-yellow-400" />
              <span className="text-white font-bold">PawsHope</span>
            </div>
            <div className="text-sm">© 2024 PawsHope. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
