import React from "react";
import { Heart, HandHeart, PawPrint, Phone, ArrowRight } from "lucide-react";

function JoinUs() {
  return (
    <div className="py-12 bg-gray-50 rounded-md">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
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
