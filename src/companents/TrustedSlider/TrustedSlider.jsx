import React from "react";

const logos = [
  {
    black:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc93d_astrazeneca-black.svg",
    color:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc976_astrazeneca.svg",
    alt: "AstraZeneca",
  },
  {
    black:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc93b_bosch-black.svg",
    color:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc95e_bosch.svg",
    alt: "Bosch",
  },
  // Add more logos as needed
];

const TrustedSlider = () => {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold">
          Proudly Trusted by Top Companies Worldwide
        </h3>
      </div>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-slide-infinite gap-16">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="flex-shrink-0 relative w-40 h-20">
              <img
                src={logo.black}
                alt={logo.alt}
                className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 hover:opacity-0"
              />
              <img
                src={logo.color}
                alt={logo.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSlider;

/* Tailwind CSS - Add this animation to your global styles or tailwind.config.js:

 ,
  } extend: {
    animation: {
      'slide-infinite': 'slide 30s linear infinite',
    },
    keyframes: {
      slide: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    }
*/
