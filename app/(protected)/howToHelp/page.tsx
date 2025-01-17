"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, ArrowRight, Heart, Navigation } from "lucide-react";
import Image from "next/image";

export default function HelpPage() {
  const [address, setAddress] = useState("");
  
 


  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2">
            How to Help <Heart className="h-8 w-8 text-red-500 animate-pulse" />
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Join us in making a difference in your local community. Enter your
            address to find nearby opportunities to help.
          </p>
        </div>

        <div className="space-y-8">
          <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-none shadow-xl">
            <div className="aspect-video w-full rounded-lg overflow-hidden">
            <Image
                             src="/mapGoogle.jpg"
                             alt="Contact illustration"
                             className="rounded-lg shadow-lg w-full h-full object-cover"
                             width={500}
                             height={500}
                           />
            </div>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-none shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-500" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Enter Your Location
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow">
                  <Input
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="bg-white/70 dark:bg-gray-700/70"
                  />
                </div>
                <Button
                  onClick={() => (window.location.href = "/opportunities")}
                  className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white"
                >
                  Find Opportunities
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <Navigation className="h-4 w-4" />
                <span>Or use your current location</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    if (navigator.geolocation) {
                      navigator.geolocation.getCurrentPosition((position) => {
                        const { latitude, longitude } = position.coords;
                        setAddress(`${latitude}, ${longitude}`);
                      });
                    }
                  }}
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                >
                  Detect Location
                </Button>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-none shadow-xl">
              <h3 className="text-lg font-semibold mb-2">Local Events</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Find community events and volunteer opportunities near you.
              </p>
            </Card>
            <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-none shadow-xl">
              <h3 className="text-lg font-semibold mb-2">Donate</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Support local causes and make a difference in your community.
              </p>
            </Card>
            <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-none shadow-xl">
              <h3 className="text-lg font-semibold mb-2">Spread the Word</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Share opportunities and inspire others to get involved.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
