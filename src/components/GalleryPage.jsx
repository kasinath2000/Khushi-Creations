import React from "react";
import { Grid, Typography } from "@mui/material";
import CustomCard from "./CustomCard/CustomCard";
import galleryData from "../data/galleryData"; // Import all gallery data

const GalleryPage = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <Typography variant="h4" gutterBottom align="center" className="text-teal-600">
        All Mehendi Designs
      </Typography>
      <Grid container spacing={4}>
        {galleryData.map((design) => (
          <Grid item xs={12} sm={6} md={4} key={design.id}>
            <CustomCard
              title={design.title}
              description={design.description}
              imageSrc={design.imageSrc}
              imageAlt={design.imageAlt}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default GalleryPage;
