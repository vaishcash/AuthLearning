// "use client";
// import React, { useState } from "react";
// import {
//   ArrowRight,
//   Pill,
//   Stethoscope,
//   UtensilsCrossed,
//   HomeIcon,
//   Heart,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// function NeedHelp() {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

//   const categories = [
//     {
//       id: "food",
//       title: "Food Support",
//       description: "Need food for hungry paws",
//       icon: UtensilsCrossed,
//       image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c",
//       color: "bg-pink-400",
//     },
//     {
//       id: "medicine",
//       title: "Medicine",
//       description: "Basic medical supplies needed",
//       icon: Pill,
//       image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97",
//       color: "bg-purple-400",
//     },
//     {
//       id: "vet",
//       title: "Veterinary Help",
//       description: "Professional medical attention",
//       icon: Stethoscope,
//       image: "https://images.unsplash.com/photo-1612531822963-8e57a8d60d4e",
//       color: "bg-blue-400",
//     },
//     {
//       id: "shelter",
//       title: "Shelter",
//       description: "A cozy home for furry friends",
//       icon: HomeIcon,
//       image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
//       color: "bg-green-400",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b w-full from-blue-50 rounded via-pink-50 to-purple-50 py-16  overflow-hidden">
//       {/* Floating hearts background */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(12)].map((_, i) => (
//           <Heart
//             key={i}
//             className={`
//               absolute animate-float opacity-20
//               ${["text-pink-800", "text-purple-400", "text-blue-700"][i % 3]}
//             `}
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               fontSize: `${Math.random() * 20 + 10}px`,
//               animationDelay: `${i * 0.5}s`,
//               transform: `rotate(${Math.random() * 360}deg)`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="container mx-auto px-6 relative z-10">
//         <div className="text-center mb-16">
//           <div className="inline-block">
//             <h1 className="text-5xl font-bold text-gray-800 mb-6 relative">
//               How can we help your furry friend?
//               <div className="absolute -top-6 -right-6 transform rotate-12">
//                 <Heart className="h-8 w-8 text-pink-400 animate-bounce" />
//               </div>
//             </h1>
//           </div>
//           <p className="text-xl text-gray-600">
//             Choose the type of help needed for the little one 🐾
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
//           {categories.map((category) => {
//             const Icon = category.icon;
//             const isSelected = selectedCategory === category.id;
//             const isHovered = hoveredCategory === category.id;

//             return (
//               <button
//                 key={category.id}
//                 onClick={() => setSelectedCategory(category.id)}
//                 onMouseEnter={() => setHoveredCategory(category.id)}
//                 onMouseLeave={() => setHoveredCategory(null)}
//                 className="group relative focus:outline-none transform transition-all duration-300"
//                 style={{
//                   transform: isHovered
//                     ? "scale(1.05) rotate(2deg)"
//                     : "scale(1) rotate(0deg)",
//                 }}
//               >
//                 <div
//                   className={`
//                   relative rounded-full overflow-hidden bg-white shadow-xl
//                   ${isSelected ? "ring-4 ring-pink-400 ring-opacity-50" : ""}
//                   transform transition-all duration-500
//                   hover:shadow-2xl
//                 `}
//                 >
//                   <div className="aspect-square relative">
//                     <Image
//                       src={category.image}
//                       alt={category.title}
//                       className="w-full h-full object-cover"
//                       width={500}
//                       height={500}
//                     />
//                     <div
//                       className={`
//                       absolute inset-0 bg-gradient-to-b from-white/0 to-white/90
//                       backdrop-blur-[2px] transition-all duration-300
//                     `}
//                     />
//                     <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
//                       <div
//                         className={`
//                         ${category.color} p-4 rounded-2xl shadow-lg mb-4
//                         transform transition-transform duration-300 group-hover:scale-110
//                       `}
//                       >
//                         <Icon className="h-8 w-8 text-white" />
//                       </div>
//                       <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                         {category.title}
//                       </h3>
//                       <p className="text-gray-600 text-center">
//                         {category.description}
//                       </p>
//                       {isSelected && (
//                         <div className="absolute -top-1 -right-1">
//                           <Heart
//                             fill="#f472b6"
//                             className="h-6 w-6 text-pink-400 animate-bounce"
//                           />
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </button>
//             );
//           })}
//         </div>

//         <div className="flex justify-center">
//           <Button
//             onClick={() => (window.location.href = "/howToHelp")}
//             className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white"
//           >
//             Go Next
//             <ArrowRight className="ml-2 h-4 w-4" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NeedHelp;
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
