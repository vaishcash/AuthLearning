"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  IndianRupee,
  Heart,
  CheckCircle2,
  CreditCard,
  HandHeart,
  ArrowRight,
  QrCode,
} from "lucide-react";
import { toast } from "sonner";

export default function DonatePage() {
  const [upiId, setUpiId] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [upiCompleted, setUpiCompleted] = useState(false);
  const [optionCompleted, setOptionCompleted] = useState(false);

  const helpOptions = [
    "Local Food Bank Support",
    "Educational Materials",
    "Medical Supplies",
    "Emergency Shelter",
    "Clean Water Initiative",
    "Community Development",
  ];

  const handleUpiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!upiId || !amount) {
      toast.error("Please fill in all UPI details");
      return;
    }
    // In a real app, handle UPI payment here
    toast.success("UPI Transaction Completed! 🎉");
    setUpiCompleted(true);
  };

  const handleOptionSubmit = () => {
    if (!selectedOption) {
      toast.error("Please select a help option");
      return;
    }
    toast.success("Help option confirmed! 🌟");
    setOptionCompleted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2">
            Make a Difference{" "}
            <Heart className="h-8 w-8 text-red-500 animate-pulse" />
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Your contribution can change lives. Choose how you would like to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* UPI Transaction Section */}
          <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-none shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <CreditCard className="h-6 w-6 text-purple-500" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  UPI Payment
                </h2>
              </div>

              <form onSubmit={handleUpiSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Enter UPI ID"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="bg-white/70 dark:bg-gray-700/70"
                    disabled={upiCompleted}
                  />
                </div>
                <div className="flex gap-2">
                  <IndianRupee className="h-5 w-5 text-gray-500 mt-2" />
                  <Input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) =>{ setAmount(e.target.value)}}
                    className="bg-white/70 dark:bg-gray-700/70"
                    disabled={upiCompleted}
                  />
                </div>
                {!upiCompleted ? (
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  >
                    Complete Payment
                    <QrCode className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <div className="flex items-center justify-center text-green-500 gap-2">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Payment Completed!</span>
                  </div>
                )}
              </form>
            </div>
          </Card>

          {/* Help Options Section */}
          <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-none shadow-xl">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <HandHeart className="h-6 w-6 text-pink-500" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Choose How to Help
                </h2>
              </div>

              <div className="space-y-4">
                {helpOptions.map((option) => (
                  <Button
                    key={option}
                    variant={selectedOption === option ? "default" : "outline"}
                    className={`w-full justify-start ${
                      selectedOption === option
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : ""
                    }`}
                    onClick={() => setSelectedOption(option)}
                    disabled={optionCompleted}
                  >
                    {option}
                  </Button>
                ))}

                {!optionCompleted ? (
                  <Button
                    onClick={handleOptionSubmit}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white mt-4"
                  >
                    Confirm Selection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <div className="flex items-center justify-center text-green-500 gap-2 mt-4">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Option Confirmed!</span>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {upiCompleted && optionCompleted && (
          <Card className="mt-8 p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-none shadow-xl text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Thank You for Your Support! 🎉
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your contribution will help make a real difference in the
              community. We will send you updates about how your donation is
              helping.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
