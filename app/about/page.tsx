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
    <div className="container mx-auto mb-6 mt-12 px-4 py-8 md:py-12 lg:py-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-center mb-3 text-2xl md:text-3xl lg:text-4xl font-ubuntubold uppercase underline underline-offset-4">
          About me
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        {/* Profile Image */}
        <div className="flex justify-center md:w-1/3 lg:w-1/4">
          <Image
            src={profile}
            alt="My profile"
            className="w-48 md:w-64 lg:w-80 h-auto rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Personal Information */}
        <div className="md:w-2/3 lg:w-3/4">
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-6">
            My Personal Information
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <PlayIcon
                  width={16}
                  height={16}
                  className="text-gray-900 flex-shrink-0"
                />
                <div className="flex space-x-2">
                  <span className="font-semibold text-gray-800">
                    {info.label}:
                  </span>
                  <span className="text-gray-600">{info.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
