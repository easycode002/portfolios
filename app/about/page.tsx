import Image from "next/image";
import React from "react";
import profile from "@/public/images/profile.png";
import { PlayIcon } from "../components/atoms/Icon";

const About = () => {
  const personalInfo = [
    { label: "Name", value: "Mab Sothea" },
    { label: "Nickname", value: "Small Dev" },
    { label: "Birthday", value: "15-Feb-2002" },
    { label: "Phone", value: "+855 16 217 904" },
    { label: "City", value: "Phnom Penh, Cambodia" },
    { label: "Age", value: "21" },
    { label: "Email", value: "sotheamab002@gmail.com" },
    { label: "Freelance", value: "Unavailable" },
  ];

  return (
    <div className="min-h-screen w-full bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-ubuntubold uppercase">
              <span className="border-b-2 border-gray-800 pb-2">About me</span>
            </h2>
          </header>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start lg:w-1/3">
              <div className="relative w-56 sm:w-64 lg:w-full max-w-sm aspect-square">
                <Image
                  src={profile}
                  alt="My profile"
                  fill
                  className="rounded-xl shadow-lg object-cover"
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 384px"
                  priority
                />
              </div>
            </div>

            {/* Personal Information */}
            <div className="flex-1 lg:w-2/3">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 sm:mb-8">
                My Personal Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {personalInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-3 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-md"
                  >
                    <PlayIcon
                      width={20}
                      height={20}
                      className="text-gray-900 flex-shrink-0 mt-1 group-hover:text-blue-600 transition-colors"
                    />
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <span className="font-semibold text-gray-800 whitespace-nowrap">
                        {info.label}:
                      </span>
                      <span className="text-gray-600 break-all">
                        {info.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;