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
  {
    black:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc93f_CATL-black-1.svg",
    color:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc968_CATL-1.svg",
    alt: "CATL",
  },
  {
    black:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc93a_CATL-black.svg",
    color:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc95d_CATL.svg",
    alt: "CATL Alt",
  },
  {
    black:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc939_Chery-black.svg",
    color:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc969_Chery.svg",
    alt: "Chery",
  },
  {
    black:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc93c_citroen-black.svg",
    color:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc96a_citroen.svg",
    alt: "Citroen",
  },
  {
    black:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc940_denso-black.svg",
    color:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc96b_denso.svg",
    alt: "Denso",
  },
  {
    black:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc941_evergrande-black.svg",
    color:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc96c_evergrande.svg",
    alt: "Evergrande",
  },
  {
    black:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc942_foxconn-black.svg",
    color:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc96d_foxconn.svg",
    alt: "Foxconn",
  },
  {
    black:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc943_gac-black.svg",
    color:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc96e_gac.svg",
    alt: "GAC",
  },
  {
    black:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc944_geely-black.svg",
    color:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc96f_geely.svg",
    alt: "Geely",
  },
  {
    black:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc945_gotion-black.svg",
    color:
      "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc970_gotion.svg",
    alt: "Gotion",
  },
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
            <div
              key={index}
              className="flex-shrink-0 relative w-40 h-20 hover:cursor-pointer"
            >
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
        <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
};

export default TrustedSlider;

/* Tailwind CSS (add to tailwind.config.js)
extend: {
  animation: {
    'slide-infinite': 'slide 40s linear infinite',
  },
  keyframes: {
    slide: {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-50%)' },
    },
  }
}
*/
