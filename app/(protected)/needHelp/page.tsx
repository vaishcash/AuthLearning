
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Bone,
  Heart,
  Home,
  Pill,
  Bath,
  PawPrint,
  ArrowRight,
  Shield as ShieldHeart,
  Baby,
  Truck,
  HeartPulse,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";
import { UserButton } from "@/components/auth/user-button";

export default function AnimalHelpPage() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");

  const helpCategories = [
    {
      title: "Food & Nutrition",
      icon: <Bone className="h-6 w-6 text-orange-500" />,
      description:
        "Quality pet food, dietary supplements, and feeding supplies",
      items: [
        "Age-appropriate food",
        "Special dietary needs",
        "Feeding bowls",
        "Treats for training",
      ],
      image:
        "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "Shelter & Housing",
      icon: <Home className="h-6 w-6 text-blue-500" />,
      description: "Safe and comfortable living spaces for animals",
      items: [
        "Warm bedding",
        "Weather protection",
        "Clean kennels",
        "Indoor/outdoor spaces",
      ],
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "Medical Care",
      icon: <Pill className="h-6 w-6 text-red-500" />,
      description: "Essential healthcare and medical attention",
      items: [
        "Vaccinations",
        "Regular check-ups",
        "Emergency care",
        "Medications",
      ],
      image:
        "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "Grooming & Hygiene",
      icon: <Bath className="h-6 w-6 text-purple-500" />,
      description: "Regular grooming and cleanliness maintenance",
      items: [
        "Bathing supplies",
        "Nail trimming",
        "Dental care",
        "Coat maintenance",
      ],
      image:
        "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "Foster Care",
      icon: <Baby className="h-6 w-6 text-pink-500" />,
      description: "Temporary homes for animals in need",
      items: [
        "Short-term care",
        "Socialization",
        "Basic training",
        "Love and attention",
      ],
      image:
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&auto=format&fit=crop&q=80",
    },
    {
      title: "Transport",
      icon: <Truck className="h-6 w-6 text-green-500" />,
      description: "Safe transportation to vets and shelters",
      items: [
        "Vet visits",
        "Shelter transfers",
        "Rescue transport",
        "Emergency rides",
      ],
      image:
        "https://images.unsplash.com/photo-1583512603806-077998240c7a?w=800&auto=format&fit=crop&q=80",
    },
  ];

  const handleHelp = () => {
    if (!selectedOption) {
      toast.error("Please select a help category first!", {
        description: "Choose how you'd like to help our furry friends.",
      });
      return;
    }

    toast.success("Thank you for choosing to help!", {
      description: `You selected: ${selectedOption}`,
    });
    router.push(
      "/help?type=animal&category=" + encodeURIComponent(selectedOption)
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <nav className="relative w-full pb-6 container shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center  text-yellow-500">
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

          <div className="flex items-center justify-center gap-2 mt-7 mb-4">
            <PawPrint className="h-12 w-12 text-orange-500" />
            <h1 className="text-4xl font-bold text-gray-900  dark:text-white">
              Help a Furry Friend
            </h1>
            <Heart className="h-8 w-8 text-red-500 animate-pulse" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Every animal deserves love, care, and a safe home. Discover how you
            can make a difference in their lives through various forms of
            support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {helpCategories.map((category) => (
            <Card
              key={category.title}
              className={`p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-none shadow-xl cursor-pointer transition-all duration-300 hover:scale-105 overflow-hidden ${
                selectedOption === category.title
                  ? "ring-2 ring-orange-500 dark:ring-orange-400"
                  : ""
              }`}
              onClick={() => {
                setSelectedOption(category.title);
                toast.info(`Selected: ${category.title}`, {
                  description: "Click 'Start Helping Now' to proceed",
                });
              }}
            >
              <div className="relative h-48 -mx-6 -mt-6 mb-6">
                <Image
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {category.description}
              </p>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
                  >
                    <ShieldHeart className="h-4 w-4 text-orange-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={handleHelp}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-transform hover:scale-105"
          >
            <HeartPulse className="mr-2 h-6 w-6" />
            Start Helping Now
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </div>

        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p className="text-sm">
            Your support helps us provide essential care to animals in need.
            Every contribution, big or small, makes a difference.
          </p>
        </div>
      </div>
    </div>
  );
}
