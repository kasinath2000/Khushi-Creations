import React from "react";
import { Drawer, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const DrawerComponent = ({ open, onClose, title, children }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div className="w-80 sm:w-96 p-4">
        {/* Header with Close Button */}
        <div className="flex justify-between items-center mb-4">
          <Typography variant="h6" className="text-teal-600 font-bold">
            {title}
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>

        {/* Drawer Content */}
        <div className="overflow-auto">
          {children}
        </div>
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
