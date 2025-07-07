import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";

const cobotSeries = [
  {
    name: "CS Series",
    description: "The top-of-the-line solution for advanced requirements",
    models: 6,
    weightRange: "3-30",
    reach: "624-1800",
    accuracy: "±0.02-0.1",
    video: "https://dl.dropboxusercontent.com/scl/fi/95hjfd8qog8ve242ew0rg/cs_series_2x.mp4?rlkey=ozprfmdt14f0n661mcn7j7rim&dl=0",
    link: "/series/cs-series"
  },
  {
    name: "EC Series",
    description: "Reliable and cost-effective, for all processing tasks",
    models: 6,
    weightRange: "3-16",
    reach: "624-1900",
    accuracy: "±0.02-0.1",
    video: "https://dl.dropboxusercontent.com/scl/fi/7vl4ryxen1z7w2ik3t2w5/ec_series_2x.mp4?rlkey=66xqgv2qla7naaw09y63pkvm9&dl=0",
    link: "/series/ec-series"
  }
];

const CobotsSeriesSlider = () => {
  return (
    <Box py={10} bgcolor="white">
      <Container>
        <Typography variant="overline" color="textSecondary">OUR RANGE</Typography>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Cobots Series
        </Typography>

        <Grid container spacing={6}>
          {cobotSeries.map((series, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box>
                <Typography variant="h5" textTransform="uppercase" fontWeight="bold">
                  {series.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {series.description}
                </Typography>
                <Box mt={2} display="flex" flexWrap="wrap" gap={3}>
                  <Box>
                    <Typography fontWeight="bold">{series.models}</Typography>
                    <Typography variant="caption" color="textSecondary">models</Typography>
                  </Box>
                  <Box>
                    <Typography fontWeight="bold">{series.weightRange}</Typography>
                    <Typography variant="caption" color="textSecondary">kg</Typography>
                  </Box>
                  <Box>
                    <Typography fontWeight="bold">{series.reach}</Typography>
                    <Typography variant="caption" color="textSecondary">mm</Typography>
                  </Box>
                  <Box>
                    <Typography fontWeight="bold">{series.accuracy}</Typography>
                    <Typography variant="caption" color="textSecondary">mm</Typography>
                  </Box>
                </Box>
                <Box mt={2}>
                  <Box
                    component="video"
                    src={series.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    width="100%"
                    height="auto"
                    sx={{ borderRadius: 2, boxShadow: 2 }}
                  />
                </Box>
                <Button 
                  href={series.link} 
                  variant="contained" 
                  sx={{ mt: 2 }}
                >
                  Explore
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CobotsSeriesSlider;
