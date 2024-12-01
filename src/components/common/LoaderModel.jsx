import React, { useEffect } from "react";
import { Box, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoaderModel = ({ open, handleClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        navigate("/organization-auth/organization-invites");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [open, navigate]);

  return (
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
      className="flex justify-center items-center h-full w-full"
    >
      <Box className="flex justify-center outline-none p-10 rounded-2xl h-[15rem] lg:h-[27rem] w-[15rem] lg:w-[27rem] gap-5 flex-col items-center bg-white relative">
        {/* Custom Loader */}
        <div className="w-28 lg:w-52 h-28 lg:h-52 border-[.8rem] lg:border-[1.2rem] border-gray-300 border-t-primary rounded-full animate-spin"></div>
      </Box>
    </Modal>
  );
};

export default LoaderModel;
