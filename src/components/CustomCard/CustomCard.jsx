import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const CustomCard = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: '20px', overflow: 'hidden' }}>
      <CardMedia
        component="img"
        height="200"
        image={imageSrc}
        alt={imageAlt}
        sx={{
          objectFit: 'cover',
        
        }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
