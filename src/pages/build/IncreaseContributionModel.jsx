import React, { useState } from "react";
import UpdateModel from "../../assets/model/model-tick.png";
import CloseIcon from "@mui/icons-material/Close";
import { Typography, Box, Modal } from "@mui/material";
import { Link } from "react-router-dom";
import InputField from "../../components/common/InputField";
import TagInputField from "../../components/common/TagInputField";
import TextareaField from "../../components/common/TextAreaField";

const IncreaseContributionModel = ({
    open,
    handleClose,
    title,
    content,
    buttonText,
    identifier = 'lksdj',
    finalStep,
}) => {
    console.log("identifier", identifier);
    const [tags, setTags] = useState([]);
    const [funded, setFunded] = useState(false)

    const handleTagChange = (newTags) => {
        setTags(newTags)
    }

    const handleFund = () => {
        setFunded(true)
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
                className="flex justify-center items-center h-full w-full"
            >
                <Box className={`flex justify-center outline-none p-10 rounded-2xl ${funded ? "h-[40%]" : "h-[70%]"} overflow-y-auto w-5/6  lg:w-[30%] gap-5 flex-col items-center bg-white relative`}>
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
                    {
                        funded ? (
                            <>

                                <div className="grid grid-cols-2">
                                    <div className="border border-r-black text-center pr-4">
                                        <p className="font-xl font-semibold text-light">Remaining</p>
                                        <p className="font-2xl font-semibold text-[#3D434A]">$1560</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="font-xl font-semibold text-light">Time Left</p>
                                        <p className="font-2xl font-semibold text-[#3D434A]">12 Days</p>
                                    </div>
                                </div>
                                <div className="">
                                    <button
                                        className="bg-primary shadow-md text-white w-52 h-12 text-base rounded-lg flex gap-2 items-center text-center justify-center"
                                        onClick={handleClose}
                                        type="submit"
                                    >
                                        Continue
                                    </button>

                                </div>
                            </>
                        )
                            :
                            (
                                <>
                                    <h2 className="text-xl text-[#2D2D2D] text-center font-semibold">How much do you want to contribute?</h2>
                                    <InputField
                                        inputLabel={"Enter ammount here!"}
                                        placeholderText={"$50"}
                                        type="text"
                                    />
                                    <p>Tokens You Earned: <span className="text-[#0DA759]">20</span></p>


                                    <div className="">
                                        <button
                                            className="bg-primary shadow-md text-white w-52 h-12 text-base rounded-lg flex gap-2 items-center text-center justify-center"
                                            onClick={handleFund}
                                            type="submit"
                                        >
                                            Fund Now!
                                        </button>

                                    </div>
                                </>
                            )
                    }
                </Box>
            </Modal>
        </div>
    );
};

export default IncreaseContributionModel;
