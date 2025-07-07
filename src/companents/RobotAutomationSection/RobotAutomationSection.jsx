import React from "react";

const features = [
  {
    title: "Hardware",
    icon: "https://cdn.prod.website-files.com/657763277bf15c09d476a012/65baba906a30689f8603c6c3_iccon-Hardware.svg",
    description:
      "Sturdy and lightweight 6-joint robotic arms suitable for a wide range of collaborative tasks. Protection rating up to IP68, payload up to 25 kg and reach up to 1900mm. Highly expandable controllers with optional OEM versions.",
  },
  {
    title: "Software",
    icon: "https://cdn.prod.website-files.com/657763277bf15c09d476a012/65baba940ea25cf9cf7312a0_icon-Software.svg",
    description:
      "Intuitive graphic UI supporting custom plugins development and multiple programming languages. Virtual platform for robot simulation and offline programming. Embedded palletizing application wizard for fast deployment.",
  },
  {
    title: "Solutions",
    icon: "https://cdn.prod.website-files.com/657763277bf15c09d476a012/65baba98692e692627af6ae6_icon-Solutions.svg",
    description:
      "In conjunction with a broad network of integrators and OEM partners, Elite Robots provides automation solutions for all needs. Our flexibility in R&D and technical support has enabled us to undertake projects ranging from a single installation to thousands of cobots.",
  },
];

const RobotAutomationSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <p className="text-sm text-gray-500 font-semibold uppercase">
          Featured
        </p>
        <h2 className="text-3xl font-bold mt-2">
          Robot Automation at All Levels
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="mb-4 flex justify-center">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 object-contain"
                loading="lazy"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RobotAutomationSection;
