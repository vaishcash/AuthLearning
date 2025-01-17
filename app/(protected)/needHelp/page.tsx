"use client";
import React, { useState } from "react";
import {
  ArrowRight,
  Pill,
  Stethoscope,
  UtensilsCrossed,
  HomeIcon,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function NeedHelp() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = [
    {
      id: "food",
      title: "Food Support",
      description: "Need food for hungry paws",
      icon: UtensilsCrossed,
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c",
      color: "bg-pink-400",
    },
    {
      id: "medicine",
      title: "Medicine",
      description: "Basic medical supplies needed",
      icon: Pill,
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97",
      color: "bg-purple-400",
    },
    {
      id: "vet",
      title: "Veterinary Help",
      description: "Professional medical attention",
      icon: Stethoscope,
      image: "https://images.unsplash.com/photo-1612531822963-8e57a8d60d4e",
      color: "bg-blue-400",
    },
    {
      id: "shelter",
      title: "Shelter",
      description: "A cozy home for furry friends",
      icon: HomeIcon,
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
      color: "bg-green-400",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b w-full from-blue-50 rounded via-pink-50 to-purple-50 py-16  overflow-hidden">
      {/* Floating hearts background */}
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

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className="text-5xl font-bold text-gray-800 mb-6 relative">
              How can we help your furry friend?
              <div className="absolute -top-6 -right-6 transform rotate-12">
                <Heart className="h-8 w-8 text-pink-400 animate-bounce" />
              </div>
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Choose the type of help needed for the little one 🐾
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            const isHovered = hoveredCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className="group relative focus:outline-none transform transition-all duration-300"
                style={{
                  transform: isHovered
                    ? "scale(1.05) rotate(2deg)"
                    : "scale(1) rotate(0deg)",
                }}
              >
                <div
                  className={`
                  relative rounded-full overflow-hidden bg-white shadow-xl
                  ${isSelected ? "ring-4 ring-pink-400 ring-opacity-50" : ""}
                  transform transition-all duration-500
                  hover:shadow-2xl
                `}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                      width={500}
                      height={500}
                    />
                    <div
                      className={`
                      absolute inset-0 bg-gradient-to-b from-white/0 to-white/90
                      backdrop-blur-[2px] transition-all duration-300
                    `}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                      <div
                        className={`
                        ${category.color} p-4 rounded-2xl shadow-lg mb-4
                        transform transition-transform duration-300 group-hover:scale-110
                      `}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-600 text-center">
                        {category.description}
                      </p>
                      {isSelected && (
                        <div className="absolute -top-1 -right-1">
                          <Heart
                            fill="#f472b6"
                            className="h-6 w-6 text-pink-400 animate-bounce"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={() => (window.location.href = "/howToHelp")}
            className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white"
          >
            Go Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NeedHelp;
