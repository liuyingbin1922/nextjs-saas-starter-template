import React from "react";
import FeatureCard from "./FeatureCard";
import { FaReact, FaDatabase, FaShieldAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiStripe } from "react-icons/si";

const Features = () => {
  const features = [
    {
      icon: SiNextdotjs,
      title: "Instant Transformer Voltage Calculation",
      description: "Easily calculate transformer voltage with our free online tool. Get accurate results for primary and secondary voltage in just seconds!",
    },
    {
      icon: FaReact,
      title: "Supports Single-Phase",
      description: "Our calculator handles both single-phase and three-phase transformer calculations, making it ideal for engineers, electricians, and students.",
    },
    {
      icon: FaDatabase,
      title: "100% Free & Online – No Downloads Required",
      description: "Use our web-based transformer calculator from anywhere. No software installation or registration needed!",
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">Features</h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
          A Free Online Transformer Voltage Calculator
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
