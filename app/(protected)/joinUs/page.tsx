"use client";
import React from "react";
import { Heart, HandHeart, PawPrint, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

function JoinUs() {
  return (
    <div className="w-full py-8 bg-gray-50 rounded-md ">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className={`
              absolute animate-float opacity-20
              ${["text-pink-800", "text-purple-400", "text-blue-700"][i % 3]}
                  `}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-6">
        <div className="text-center  ">
          <nav className="relative w-full pb-6 z-10 container shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-yellow-500">
                <PawPrint className="h-8 w-8" />
                <span className="text-2xl font-bold text-black">PawsHope</span>
              </div>
              <div className="hidden md:flex space-x-8 text-black">
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

              <Button
                onClick={() => (window.location.href = "/opportunities")}
                className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 transition"
              >
                Donate Now
              </Button>

              <UserButton />
            </div>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4">
            Join Our Community
          </h1>

          <p className="text-xl text-gray-600">
            Whether you need assistance or want to help, we are here for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Want Help Column */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-8 w-8 text-red-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Need Help?
              </h2>
              <p className="text-gray-600 mb-6">
                If you have found a street animal in need or require assistance
                with an animal-related situation, we are here to help.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <PawPrint className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Emergency Response
                    </h3>
                    <p className="text-gray-600">
                      24/7 response team for injured or distressed animals
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-6 w-6 text-yellow-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Helpline Support
                    </h3>
                    <p className="text-gray-600">
                      Professional guidance and immediate assistance
                    </p>
                  </div>
                </div>
              </div>
              <button className="w-full bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600 transition flex items-center justify-center">
                Request Help Now <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Want to Help Column */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <HandHeart className="h-8 w-8 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Want to Help?
              </h2>
              <p className="text-gray-600 mb-6">
                Join our community of animal lovers and make a difference in the
                lives of street animals.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-500 font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Volunteer</h3>
                    <p className="text-gray-600">
                      Join our feeding programs and rescue missions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-500 font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Foster</h3>
                    <p className="text-gray-600">
                      Provide temporary homes for animals in need
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-green-500 font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Donate</h3>
                    <p className="text-gray-600">
                      Support our mission with financial contributions
                    </p>
                  </div>
                </div>
              </div>
              <button className="w-full bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition flex items-center justify-center">
                Join Us Today <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUs;
