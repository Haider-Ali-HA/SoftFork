import React from "react";
import UpdateModel from "../../assets/model/model-tick.png";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, Box, Modal } from "@mui/material";
import { Link } from "react-router-dom";

const Model = ({
  open,
  handleClose,
  title,
  content,
  buttonText,
  identifier,
  finalStep,
}) => {
  console.log("identifier", identifier);
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        className="flex justify-center items-center h-full w-full"
      >
        <Box className="flex justify-center outline-none p-10 rounded-2xl h-auto w-5/6  lg:w-2/6 gap-5 flex-col items-center bg-white relative">
          <CloseIcon
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              cursor: "pointer",
              color: "gray",
            }}
          />
          <img
            src={UpdateModel}
            className="w-20 md:w-28 "
            alt="update model image"
          />
          <Typography
            className="text-xl md:!text-3xl text-center"
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
          >
            {finalStep === "organizationSetup"
              ? "Organization Setup"
              : title}
          </Typography>
          <Typography
            className="!text-base md:!text-lg text-center !font-normal"
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
          >
            {finalStep === "organizationSetup"
              ? "Welcome! Let's get your team on board. You can invite employees via Slack or Rippling."
              : content}
          </Typography>

          {finalStep === "organizationSetup" ? (
            <div className="flex flex-wrap gap-4">
              <button
                className="bg-primary px-2 shadow-md text-white  h-12 text-base rounded-lg flex gap-2 items-center justify-center"
                onClick={handleClose}
                type="submit"
              >
                Invite Employee from Stack
              </button>
              <button
                className="bg-primary px-2 shadow-md text-white  h-12 text-base rounded-lg flex gap-2 items-center justify-center"
                onClick={handleClose}
                type="submit"
              >
                Invite Employee from Riplling
              </button>
            </div>
          ) : (
            <>
              {identifier === "finalTerms&conditions" ? (
                <Link to="/organization-auth/final-terms&agreements">
                  <button
                    className="bg-primary shadow-md text-white w-52 h-12 text-base rounded-lg flex gap-2 items-center justify-center"
                    onClick={handleClose}
                    type="submit"
                  >
                    {buttonText}
                  </button>
                </Link>
              ) : (
                <button
                  className="bg-primary shadow-md text-white w-52 h-12 text-base rounded-lg flex gap-2 items-center justify-center"
                  onClick={handleClose}
                  type="submit"
                >
                  {buttonText}
                </button>
              )}
            </>
          )}

          {/* <button
            className="bg-primary shadow-md text-white w-52 h-12 text-base rounded-lg flex gap-2 items-center justify-center"
            onClick={handleClose}
            type="submit"
          >
            {buttonText}
          </button> */}
        </Box>
      </Modal>
    </div>
  );
};

export default Model;
