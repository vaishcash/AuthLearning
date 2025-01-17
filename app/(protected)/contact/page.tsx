"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Heart, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon 💌");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center gap-2">
            Let us Connect{" "}
            <Heart className="h-8 w-8 text-pink-500 animate-pulse" />
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We do love to hear from you! Send us a message and we will respond as
            soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-none shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-white/70 dark:bg-gray-700/70"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-white/70 dark:bg-gray-700/70"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="min-h-[150px] bg-white/70 dark:bg-gray-700/70"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 border-none shadow-xl">
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-purple-500" />
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                  <Mail className="h-5 w-5 text-pink-500" />
                  <span>paw@example.com</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-700 dark:text-gray-300">
                  <Phone className="h-5 w-5 text-pink-500" />
                  <span>+91 00000 00000</span>
                </div>
              </div>

              <div className="pt-6">
                <Image
                  src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=800&auto=format&fit=crop&q=80"
                  alt="Contact illustration"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
