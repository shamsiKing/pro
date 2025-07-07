import React from "react";
import { Typography, Box, Container } from "@mui/material";

const logos = [
  {
    black: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc93d_astrazeneca-black.svg",
    color: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc976_astrazeneca.svg",
    alt: "AstraZeneca"
  },
  {
    black: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc93b_bosch-black.svg",
    color: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc95e_bosch.svg",
    alt: "Bosch"
  },
  {
    black: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc93f_CATL-black-1.svg",
    color: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc968_CATL-1.svg",
    alt: "CATL"
  },
  {
    black: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc93a_CATL-black.svg",
    color: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc95d_CATL.svg",
    alt: "CATL Alt"
  },
  {
    black: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc939_Chery-black.svg",
    color: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc969_Chery.svg",
    alt: "Chery"
  },
  {
    black: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc93c_citroen-black.svg",
    color: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc96a_citroen.svg",
    alt: "Citroen"
  },
  {
    black: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc940_denso-black.svg",
    color: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc96b_denso.svg",
    alt: "Denso"
  },
  {
    black: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc941_evergrande-black.svg",
    color: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc96c_evergrande.svg",
    alt: "Evergrande"
  },
  {
    black: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc942_foxconn-black.svg",
    color: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc96d_foxconn.svg",
    alt: "Foxconn"
  },
  {
    black: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc943_gac-black.svg",
    color: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc96e_gac.svg",
    alt: "GAC"
  },
  {
    black: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc944_geely-black.svg",
    color: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc96f_geely.svg",
    alt: "Geely"
  },
  {
    black: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc945_gotion-black.svg",
    color: "https://cdn.prod.website-files.com/6606a41edd35aa51454cc91c/6606a41edd35aa51454cc970_gotion.svg",
    alt: "Gotion"
  }
];

const TrustedSlider = () => {
  return (
    <Box component="section" sx={{ py: 10, bgcolor: "white", overflow: "hidden" }}>
      <Container>
        <Typography variant="h6" align="center" fontWeight="bold" gutterBottom>
          Proudly Trusted by Top Companies Worldwide
        </Typography>
      </Container>
      <Box sx={{ position: "relative", overflow: "hidden", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            gap: 8,
            whiteSpace: "nowrap",
            animation: "slide 40s linear infinite"
          }}
        >
          {logos.concat(logos).map((logo, index) => (
            <Box
              key={index}
              sx={{
                display: "inline-block",
                position: "relative",
                width: 160,
                height: 80,
                cursor: "pointer"
              }}
            >
              <Box
                component="img"
                src={logo.black}
                alt={logo.alt}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  transition: "opacity 0.5s",
                  '&:hover': {
                    opacity: 0
                  }
                }}
              />
              <Box
                component="img"
                src={logo.color}
                alt={logo.alt}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain"
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TrustedSlider;