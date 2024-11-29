import React, { useState } from 'react';
import { Typography, Grid, Button } from '@mui/material'; // Import necessary MUI components
import CustomCard from './CustomCard/CustomCard'; // Your custom card component
import galleryData from '../data/galleryData'; // Import your gallery data

const GallerySection = () => {
  const [showAll, setShowAll] = useState(false); // State to control the number of displayed cards

  const handleViewAll = () => {
    setShowAll(!showAll); // Toggle between showing all cards or limited cards
  };

  return (
    <section id="gallery" className="container mx-auto px-4 py-16">
      <Typography variant="h4" gutterBottom align="center" className="text-teal-600">
        Our Mehendi Designs
      </Typography>
      <Grid container spacing={4}>
        {/* Show all cards if `showAll` is true; otherwise, show the first 3 cards */}
        {(showAll ? galleryData : galleryData.slice(0, 3)).map((design) => (
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
      <div className="text-center mt-8">
        <Button
          variant="contained"
          color="primary"
          onClick={handleViewAll}
          sx={{ backgroundColor: '#14b8a6', '&:hover': { backgroundColor: '#0d9488' } }}
        >
          {showAll ? 'Show Less' : 'View All Designs'}
        </Button>
      </div>
    </section>
  );
};

export default GallerySection;
