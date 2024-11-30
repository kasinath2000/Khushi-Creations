// import React from 'react';
// import { Card, CardContent, Typography, CardMedia } from '@mui/material';

// const CustomCard = ({ title, description, imageSrc, imageAlt }) => {
//   return (
//     <Card sx={{ 
//       maxWidth: 345,
//       borderRadius: '20px', 
//       overflow: 'hidden',
//       boxShadow: 3, // Add a subtle shadow for depth
//       }}>
//       <CardMedia
//         component="img"
//         height="200"
//         image={imageSrc}
//         alt={imageAlt}
//         sx={{
//           width:'100%',
//           height: '200',
//           objectFit: 'cover',
//           border: "1px solid #ccc", // Add a border around the image
//           borderRadius: "10px", // Smooth corners for the image
//           margin: "1px", // Add spacing around the image to separate it from the card edges
        
//         }}
//       />
//       <CardContent>
//         <Typography variant="h6" component="div">
//           {title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {description}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default CustomCard;


// import React from 'react';
// import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

// const CustomCard = ({ title, description, imageSrc, imageAlt }) => {
//   return (
//     <Card sx={{ 
//       display: 'flex',           // Use flexbox for horizontal layout
//       maxWidth: 600,             // Set max width for the card
//       borderRadius: '20px', 
//       overflow: 'hidden',
//       boxShadow: 3,              // Add a subtle shadow for depth
//     }}>
//       {/* Image Section (Left side of the card) */}
//       <Box
//         sx={{
//           width: 200,             // Fixed width for image
//           height: 200,            // Fixed height for image
//           overflow: 'hidden',
//           borderRight: '1px solid #ccc',  // Optional: add a border between image and text
//         }}
//       >
//         <CardMedia
//           component="img"
//           sx={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',    // Ensures the image fills the space without distortion
//             borderRadius: '10px',  // Smooth corners for the image
//           }}
//           image={imageSrc}
//           alt={imageAlt}
//         />
//       </Box>

//       {/* Text Content Section (Right side of the card) */}
//       <CardContent sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',  // Vertically center the text
//         paddingLeft: 2,            // Space between text and image
//         paddingRight: 2,
//       }}>
//         <Typography 
//         variant="h6" 
//         component="div"
//         sx={{fontSize: '1rem', fontWeight: 'bold'}}
//         >
//           {title}
//         </Typography>
//         <Typography 
//         variant="body2" 
//         color="text.secondary" sx={{ marginTop: 1 ,fontSize: '0.875rem'}}>
//           {description}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

// export default CustomCard;

import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

const CustomCard = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <Card
      sx={{
        display: 'flex', // Use flexbox for horizontal layout
        maxWidth: 600, // Set max width for the card
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: 3, // Add a subtle shadow for depth
      }}
    >
      {/* Image Section (Left side of the card) */}
      <Box
        sx={{
          width: 200, // Fixed width for image
          height: 200, // Fixed height for image
          overflow: 'hidden',
          borderRight: '1px solid #ccc', // Optional: add a border between image and text
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Ensures the image fills the space without distortion
          }}
          image={imageSrc}
          alt={imageAlt}
        />
      </Box>

      {/* Text Content Section (Right side of the card) */}
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row', // Row layout for text and bar
          alignItems: 'center',
          paddingLeft: 2, // Space between text and image
          paddingRight: 2,
        }}
      >
        {/* Vertical Bar */}
        <Box
          sx={{
            width: '4px', // Thickness of the bar
            height: '80%', // Height relative to the content
            backgroundColor: '#1976d2', // Blue color for the bar
            marginRight: 2, // Space between the bar and text
            borderRadius: 2, // Smooth edges for the bar
          }}
        />

        {/* Text Section */}
        <Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontSize: '1rem', fontWeight: 'bold' }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ marginTop: 1, fontSize: '0.875rem' }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
